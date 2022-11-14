import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Content from '../components/content'
import styles from '../styles/Home.module.css'

export async function getServerSideProps() {
  const content = {
    title: 'Hi Ma Nigga',
    body: [
      `My name is Benn Dalton IRADUKUNDA, I'm a front-end developer based in Kigali, Rwanda. I have developed many types of front-ends from well known platforms, that was kidding, I designed my own projects.`,
      `I'm passionate about... wait you don't know, check in the skills page.`
    ],
  }

  return {
    props: {
      content,
    },
  }
}

export default function Home(props) {
  const { content } = props
  return (
    <>
      <Content>
        <h1>{content && content.title}</h1>
        <div>
          {content && content.body.map(each => (
            <p key={each}>{each}</p>
          ))}
        </div>
      </Content>
    </>
  )
}
