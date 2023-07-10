import Nav from '../WebComponents/Nav'
import Hero from '../WebComponents/Hero'
import Card from '../WebComponents/Card'
import cardInfo from './data'
 
export default function App() {
  const cards = cardInfo.map(card => {
    const {id, title, description, price, coverImg, stats, location, openSpots} = card
    return <Card
      key={id}
      {...card}
    />
  })
  return (
    <>
      <Nav />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>
    </>
  )
}

