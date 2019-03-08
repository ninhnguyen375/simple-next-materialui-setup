import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

class Main extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <>
        {/* Global CSS */}
        <style jsx global>
          {`
            * {
              font-family: Roboto;
            }
          `}
        </style>

        {/* Navigation Bar */}
        <Navbar />

        {children}

        {/* Footer */}
        <Footer />
      </>
    );
  }
}
Main.propTypes = { children: PropTypes.node.isRequired };
export default Main;
