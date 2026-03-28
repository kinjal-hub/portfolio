import RandomNumberComponent from '../RandomNumberComponent'


import ResponsiveSection from '../ResponsiveSection'


const Section2 = () => {
  return (
    <div>
        <ResponsiveSection backgroundColor="blue"
        content={<RandomNumberComponent/>}
         
        />
    </div>
  )
}

export default Section2