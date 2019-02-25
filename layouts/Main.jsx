import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

export class Main extends Component {
  render() {
    return (
      <>
        {/* Global CSS */}
        <style jsx global>{`
          * {
            font-family: Roboto;
          }
        `}</style>
        {/* Navigation Bar */}
        <Navbar />

        {this.props.children}

        {/* Footer */}
        <Footer />
      </>
    );
  }
}

export default Main;
