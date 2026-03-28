import RandomNumberComponent from '../RandomNumberComponent'
import ResponsiveSection from '../ResponsiveSection'


const Section1 = () => {
  return (
    <div>
        <ResponsiveSection backgroundColor="red"
          content={<RandomNumberComponent/>}
        />
        
    </div>
  )
}

export default Section1