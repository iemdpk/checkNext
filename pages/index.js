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

export default function Home() {
  var router = useRouter();
const [phone,setPhone] = useState();

function check(){
  $(".next").fadeOut();
  router.push("/secondPage");
}

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        <Button style={{borderRadius:'20px',backgroundColor:'#FFBED8'}} className={[styles.work1,"next"]} variant="text-white"  onClick={check}  >
        <h3 className='emergencyButtonMain'>Emergency Mode</h3>
      </Button>
      <div style={{textAlign:'center'}}>
        <h1></h1>
      <h5 className='text-white'>Press The Button To Continue</h5>
      </div>
     </main>
    </div>
  )
}
