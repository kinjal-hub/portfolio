import RandomNumberComponent from '../RandomNumberComponent'
import ResponsiveSection from '../ResponsiveSection'


const Section3 = () => {
  return (
    <div>
        <ResponsiveSection backgroundColor="yellow"
        content={<RandomNumberComponent/>}
        />
    </div>
  )
}

export default Section3