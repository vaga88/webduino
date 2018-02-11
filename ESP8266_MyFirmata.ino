// ESP8266 ESP-01

// Author : ChungYi Fu (Kaohsiung, Taiwan)  2018-2-11 10:30

// Command format :
// ?cmd  
// Number： ?cmd=num1  ?cmd=num1,num2
// String ： ?&cmd=str1  ?&cmd=str1,str2 
// Number+String ： ?+cmd=num1,str2   

// AP IP： 192.168.4.1
// http://192.168.4.1/?&resetwifi=id,pwd
// http://192.168.4.1/?ip
// http://192.168.4.1/?&at=AT+Command
// http://192.168.4.1/?inputpullup=3
// http://192.168.4.1/?pinmode=3,1
// http://192.168.4.1/?digitalwrite=3,1
// http://192.168.4.1/?analogwrite=3,200
// http://192.168.4.1/?digitalread=3
// http://192.168.4.1/?analogread=3
// http://192.168.4.1/?&yourcmd=Hello,World
// http://192.168.4.1/?+yourcmd=100,Hello

// STA IP：
// Query： http://192.168.4.1/?ip


#include <SoftwareSerial.h>
SoftwareSerial mySerial(10, 11); // Arduino RX:10, TX:11 

String SSID="wifi_id";
String PWD="wifi_pwd";
String ClientIP="";

void setup()
{
  Serial.begin(9600);
  mySerial.begin(9600);

  SendData("AT+RST",5000);
  SendData("AT+CWMODE=3",2000);
  SendData("AT+CIPMUX=1",2000);
  SendData("AT+CIPSERVER=1,80",2000);
  //SendData("AT+CIPSTA=\"192.168.0.3\",\"192.168.0.1\",\"255.255.255.0\"",2000);
  SendData("AT+CWJAP=\""+SSID+"\",\""+PWD+"\"",5000);
}

void loop() 
{
  String ReceiveData="", command="";
  String cmd="",str1="",str2="";
  long int num1=-1,num2=-1;
  byte ReceiveState=0,cmdState=1,num1State=0,num2State=0,commastate=0;
  
  if (mySerial.available())
  {
    while (mySerial.available())
    {
      char c=mySerial.read();
      delay(10);
      ReceiveData=ReceiveData+String(c);
      
      if (String(c).indexOf("?")!=-1) ReceiveState=1;
      if (String(c).indexOf(" ")!=-1) ReceiveState=0;
      if ((ReceiveState==1)&&(String(c).indexOf("?")==-1)) 
      {
        command=command+String(c);

        if ((String(c).indexOf("=")!=-1)&&(ReceiveState==1)) cmdState=0;
        if (cmdState==1) cmd=cmd+String(c);

        if ((String(c).indexOf("=")!=-1)&&(ReceiveState==1)) num1State=1;
        if (((String(c).indexOf(",")!=-1)||(String(c).indexOf(" ")!=-1))&&(ReceiveState==1)) num1State=0;
        if ((num1State==1)&&(String(c).indexOf("=")==-1))
        {
          if (ReceiveData.indexOf("?&")!=-1)
            str1=str1+String(c);
          else
          {
            if (num1==-1) 
              num1=c-'0'; 
            else
              num1=num1*10+(c-'0'); 
          }
        }
        
        if ((String(c).indexOf(",")!=-1)&&(ReceiveState==1)) num2State=1;
        if ((String(c).indexOf(" ")!=-1)&&(ReceiveState==1)) num2State=0;
        if ((num2State==1)&&(String(c).indexOf(",")==-1))
        {
          if ((ReceiveData.indexOf("?&")!=-1)||(ReceiveData.indexOf("?+")!=-1))
            str2=str2+String(c);
          else
          {          
            if (num2==-1) 
              num2=c-'0'; 
            else
              num2=num2*10+(c-'0'); 
          }
        }
        else if ((num2State==1)&&(String(c).indexOf(",")!=-1)&&(commastate==1)&&((ReceiveData.indexOf("?&")!=-1)||(ReceiveData.indexOf("?+")!=-1)))
          str2=str2+String(c); 
        else if (num2State==1)
          commastate=1;
      }
    }  
    Serial.println(ReceiveData);
    
    if (ReceiveData.indexOf("WIFI GOT IP")!=-1)
    { 
        pinMode(13,1);
        for (int i=0;i<20;i++)
        {
          digitalWrite(13,1);
          delay(50);
          digitalWrite(13,0);
          delay(50);
        }
        long int StartTime=millis();
        while( (StartTime+3000) > millis())
        {
            while(mySerial.available())
            {
                mySerial.read();
            }
        } 

        ClientIP="";
        int readstate=0,j=0;
        mySerial.println("AT+CIFSR");
        mySerial.flush();
        delay(5);
        while(mySerial.available())
        {
              char c=mySerial.read();
              String t=String(c);
              //Serial.print(t);
              
              if (t.indexOf("\"")!=-1) j++;
              if (j==5) 
                readstate=1;
              else if (j==6)
                readstate=0;
              if ((readstate==1)&&(t.indexOf("\"")==-1)) ClientIP=ClientIP+t;
        } 
        Serial.println(ClientIP);
    }
  }
  
  if ((ReceiveData.indexOf("?")!=-1)&&(ReceiveData.indexOf(" H")!=-1))
  {
    Serial.println("");
    Serial.println("command: "+command);
    Serial.println("cmd= "+cmd);
    Serial.println("num1= "+String(num1)+" ,num2= "+String(num2));
    Serial.println("str1= "+String(str1)+" ,str2= "+String(str2));
    
    String CID=String(ReceiveData.charAt(ReceiveData.indexOf("IPD,")+4));
    
    while (mySerial.available())
    {
      mySerial.read();
    }
    
    if (cmd=="yourcmd")
      {
        //you can do anything
        
        //Feedback(CID,"<font color=\"red\">"+cmd+"</font>",0);  --> HTML
        //Feedback(CID,cmd,1);  --> XML
        //Feedback(CID,cmd,2);  --> JSON
        //Feedback(CID,"<html>"+cmd+"</html>",3);  --> Custom definition
      }
    else if (cmd=="&yourcmd")
      {
         //you can do anything
         //Feedback(CID,"<html>"+cmd+"="+str1+","+str2+"</html>",3);
      }
    else if (cmd=="+yourcmd")
      {
         //you can do anything
        //Feedback(CID,"<html>"+cmd+"="+String(num1)+","+str2+"</html>",3);
      }    
    else if (cmd=="ip")
      {
        Feedback(CID,"<html>STAIP:"+ClientIP+"</html>",3);
      }
    else if (cmd=="&at")
      {
        mySerial.println(str2);
        mySerial.flush();
        delay(20);
        Feedback(CID,"<html>"+command+"</html>",3);
      }
    else if (cmd=="inputpullup")
      {
        pinMode(num1, INPUT_PULLUP);
        Feedback(CID,"<html>"+command+"</html>",3);
      }  
    else if (cmd=="pinmode")
      {
        pinMode(num1, num2);
        Feedback(CID,"<html>"+command+"</html>",3);
      }        
   else if (cmd=="digitalwrite")
      {
        digitalWrite(num1,num2);
        Feedback(CID,"<html>"+command+"</html>",3);
      }   
    else if (cmd=="digitalread")
      {
        Feedback(CID,"<html>"+String(digitalRead(num1))+"</html>",3);
      }    
    else if (cmd=="analogwrite")
      {
        analogWrite(num1,num2);
        Feedback(CID,"<html>"+command+"</html>",3);
      }       
    else if (cmd=="analogread")
      {
        Feedback(CID,"<html>"+String(analogRead(num1))+"</html>",3);
      }    
    else if (cmd=="&resetwifi")
      {
        Feedback(CID,"<html>"+str1+","+str2+"</html>",3);
        SendData("AT+CWJAP=\""+str1+"\",\""+str2+"\"",5000);
        mySerial.flush();
      }           
    else 
      {
        Feedback(CID,"<html>Command is not defined</html>",3);
      }  
  }
}

void SendData(String data,int TimeLimit)
{
  mySerial.println(data);
  mySerial.flush();
  delay(20);
  WaitReply(TimeLimit);
}

void Feedback(String CID,String Response,byte datatype)
{
  if (datatype==0)
  {
    Response="<!DOCTYPE HTML><html><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"></head><body>"+Response+"</body></html>";
  }
  else if (datatype==1) 
  {
    Response="<?xml version=\"1.0\" encoding=\"UTF-8\"?><ESP8266><Data><Text>"+Response+"</Text></Data></ESP8266>";
  }  
  else if (datatype==2) 
  {
    Response="[{\"ESP8266\":\""+Response+"\"}]";
  }
  else
    Response=Response;

  SendData("AT+CIPSEND="+CID+","+(Response.length()+2),2000);
  SendData(Response,2000);
  SendData("AT+CIPCLOSE="+CID,2000);
}

String WaitReply(long int TimeLimit)
{
  String ReceiveData="";
  byte ReceiveState=0;
  long int StartTime=millis();
  while( (StartTime+TimeLimit) > millis())
  {
      while(mySerial.available())
      {
          ReceiveData=ReceiveData+char(mySerial.read());
          delay(10);
          ReceiveState=1;
      }
      if (ReceiveState==1) return ReceiveData;
  } 
  return "";
}