import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import './CoreLayout.scss'
import '../../styles/core.scss'


const headerStyle = {
  width: '100%',
  margin: '0',
  padding: '0'
}
export const CoreLayout = ({children}) => (
  <div className='container text-center' style={headerStyle}>
    <Header />
    <div className='core-layout__viewport'>
      {children}
    </div>
    <Footer />
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
