import React,{useState,useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import  $   from 'jquery';
import { useRouter } from 'next/router';
import logo from './Images/icon.png'; 4
import 'react-phone-number-input/style.css'

export default function Home() {

    var router = useRouter();

const [phoneNumber,setPhone] = useState();

var [daysLeft,setDaysLeft] = useState();

var date = new Date();
var date2 = new Date("Jun 02 2022");
useEffect(()=>{ 

console.log(date2);

var Difference_In_Time = date2.getTime() - date.getTime();
  
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

console.log(Difference_In_Days);
setDaysLeft(String(Difference_In_Days).slice(0,2));
},[]);

function send(){

  if(phoneNumber != ""){
try{
  fetch("https://ekshvaramessagegateway.ekshvara.com/sendMsg.php?number="+phoneNumber+"&otp=SUB&message=Thank%20you%20for%20downloading%20Prathistha.%22https://pratistha.ekshvara.com/Android/v1Guardian/Prathistha-Guardian.apk%22%20Team%20Prathistha",{mode: 'no-cors'}).then((sendMsg)=>{
    alert("You have been sent a download link. Please use it to add a child");
    setPhone("");
  });
}
catch(err){
  alert("You have been sent a download link. Please use it to add a child");
}
  }
  else{
    alert("Please Enter your Number");
  }
}

  return (
    <div className={styles.container}>
      <Head>
        <title>This is The Second Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
<div style={{textAlign:'center'}}  className="text-center">
<Image style={{borderRadius:'50px'}} height={180} width={180} src={logo} />
 
<h5  style={{fontSize:15,marginTop:10}} className='text-white'>Free Subcription({daysLeft} Days Left)</h5>
&nbsp;
<div style={{textAlign:'center'}}>
<PhoneInput
      placeholder="Enter phone number"
      country="IN"
      value={"+91"}
      onChange={(val)=>{ setPhone(String(val).slice(2,15)); }}
      buttonStyle={{height:35,width:40,backgroundColor:'#FFBED8'}}
      inputStyle={{fontSize:20,fontFamily:'Signika'}}
    />
    </div>
<h5 style={{color:'#474848'}}>.</h5>
<Button onClick={send} style={{backgroundColor:'#FFBED8',borderWidth:0,color:'#474848',fontWeight:'bold'}} size="md">
    Send Link
</Button>
<h5 style={{color:'#474848'}}>.</h5>
<a style={{textDecoration:'none'}} href='https://youtu.be/B5ISfLkT2vc'><small   style={{color:'#ff7979',fontSize:15,fontFamily:'Signika',fontWeight:'bold'}}>How To use The App</small></a>

<h5 style={{color:'#474848'}}>.</h5>
</div>

<div style={{textAlign:'center'}}>
<small  style={{fontSize:15,fontFamily:'Signika',color:'#FFBED8'}}>Support us on</small>
</div>

<div  style={{display:'flex',flexDirection:'row',marginTop:10}}>

<div style={{width:'25%',textAlign:'center'}}>
<a style={{textDecoration:'none'}} href='https://www.facebook.com/prathisthaa'><small  className='text-white' style={{fontSize:15,fontFamily:'Signika'}}>Facebook</small></a>
</div>

<div  style={{width:'25%',textAlign:'center'}}>
<a style={{textDecoration:'none'}} href='https://instagram.com/prathistha_india'><small  className='text-white' style={{fontSize:15,fontFamily:'Signika'}}>Instagram</small></a>
</div>

<div  style={{width:'25%',textAlign:'center'}}>
<a style={{textDecoration:'none'}} href='https://wa.me/+918860885065'><small  className='text-white' style={{fontSize:15,fontFamily:'Signika'}}>Whatsapp</small></a>
</div>

<div  style={{width:'25%',textAlign:'center'}}>
<a style={{textDecoration:'none'}} href='https://play.google.com/store/apps/details?id=com.prathistha.guardian'><small  className='text-white' style={{fontSize:15,fontFamily:'Signika'}}>Playstore</small></a>
</div>

</div>

</main>

    </div>
  )
}
