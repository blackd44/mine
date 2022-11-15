import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Content from '../components/content'
import styles from '../styles/Home.module.css'

// export async function getServerSideProps() {
//   const content = {
//     title: 'Hi Ma Nigga',
//     body: [
//       `My name is Benn Dalton IRADUKUNDA, I'm a front-end developer based in Kigali, Rwanda. I have developed many types of front-ends from well known platforms, that was kidding, I designed my own projects.`,
//       `I'm passionate about... wait you don't know, check in the skills page.`
//     ],
//   }

//   return {
//     props: {
//       content,
//     },
//   }
// }

export default function Home(props) {

  return (
    <>
      <Content>
        <h1><span data-cursor-filter="invert(1)" data-cursor-size="40px">GREETINGS</span></h1>
        <div>
          <p data-cursor-filter="invert(1)" data-cursor-size="30px">My name is Benn Dalton IRADUKUNDA DUSHIMIMANA but call me Benn Dalton, I'm a front-end developer based in Kigali, Rwanda. I have developed many types of front-ends from well known platforms, that was a joke, I designed my own projects.</p>
          <p data-cursor-filter="invert(1)" data-cursor-size="30px">I'm passionate about... wait you don't know, check in my brain.</p>
        </div>
      </Content>
    </>
  )
}
