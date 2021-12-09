import * as C from './styles'
import emily from '../../images/image-emily.jpg'
import thomas from '../../images/image-thomas.jpg'
import jennie from '../../images/image-jennie.jpg'

export const Testimonials = () => {
  return (
    <C.Container>
      <C.Subtitle className="subtitle">Client testimonials</C.Subtitle>
      <C.Info>
        <img src={emily} className="emily" alt="Emily"/>
        <C.Text>
          We put our trust in Sunnyside and they delivered, making
          sure our needs were met and deadlines were always hit.
        </C.Text>
        <C.Name>Emily R.</C.Name> 
        <C.Role>Marketing Director</C.Role>
      </C.Info>
      <C.Info>
        <img src={thomas} className="thomas" alt="Thomas"/>
        <C.Text>
          Sunnyside’s enthusiasm coupled with their keen interest in our
          brand’s success made it a satisfying and enjoyable experience.
        </C.Text>
        <C.Name>Thomas S.</C.Name> 
        <C.Role>Chief Operating Officer</C.Role>
      </C.Info>
      <C.Info>
        <img src={jennie} className="jennie" alt="Jennie"/>
        <C.Text>
          Incredible end result! Our sales increased over 400%
          when we worked with Sunnyside. Highly recommended!
        </C.Text>
        <C.Name>Jennie F.</C.Name> 
        <C.Role>Business Owner</C.Role>
      </C.Info>
    </C.Container>
  )
}

  