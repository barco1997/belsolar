import React from 'react';
//  import PropTypes from 'prop-types';
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
//  import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { media } from '../../utils/media';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { withFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import bg from './bg.svg';
import SendButton from '../../components/SendButton/index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const styles = {
  input: {
    display: 'none',
  },
};

const SendCaption = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 40px;
`;

const formTheme = createMuiTheme({
  typography: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    primary: {
      light: '#fff',
      main: '#fff',
      dark: '#000',
      contrastText: '#fff',
    },
  },
});

const CollaborationForm = ({
  values,
  touched,
  errors,
  isSubmitting,
  handleChange,

  handleBlur,
  handleSubmit,
}) => (
  <React.Fragment>
    <form onSubmit={handleSubmit}>
      <MuiThemeProvider theme={formTheme}>
        <Grid container spacing={24}>
          <Grid item xs={12} md={values.width}>
            <TextField
              error={!!(errors.name && touched.name)}
              id="name"
              label="Ваше имя"
              placeholder="Введите ваше имя"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.name && errors.name}
              margin="normal"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={24}>
          <Grid item xs={12} md={values.width}>
            <TextField
              error={!!(errors.phone && touched.phone)}
              id="phone"
              label="Телефон"
              placeholder="Введите ваш телефон"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.phone && errors.phone}
              margin="normal"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={24}>
          <Grid item xs={12} md={values.width}>
            <TextField
              error={!!(errors.company && touched.company)}
              id="company"
              label="Компания"
              placeholder="Введите имя вашей компании"
              value={values.company}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.company && errors.company}
              margin="normal"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={24}>
          <Grid item xs={12} md={values.width}>
            <TextField
              error={!!(errors.description && touched.description)}
              id="description"
              label="Напишите ваш вопрос"
              placeholder="подробнее"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.Description && errors.Description}
              margin="normal"
              rows="3"
              multiline
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid container spacing={24}>
          <Grid item xs={12} md={values.width}>
            <SendCaption>
              <SendButton
                type="submit"
                disabled={isSubmitting}
                background="#2ecc71"
              >
                Send
              </SendButton>
            </SendCaption>
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnVisibilityChange
              draggable
              pauseOnHover
            />
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </form>
  </React.Fragment>
);

const EnhancedForm = withFormik({
  mapPropsToValues: props => ({
    name: '',
    width: props.halfed ? 12 : 6,
    phone: '',
    company: '',
    description: '',
  }),

  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required!'),
    // phone: Yup.string().required('Phone is required!'),
    company: Yup.string().required('Company is required!'),
    description: Yup.string().required('Profile info is required!'),
  }),

  handleSubmit: values => {
    axios
      .post('http://test.u2289.blue.elastictech.org/php/mailer.php', {
        name: values.name,
        number: values.phone,
        title: values.company,
        description: values.description,
      })
      .then(function(response) {
        console.log(response);
        toast.success('email successfully sent!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  displayName: 'CollaborationForm', // helps with React DevTools
})(withStyles(styles)(CollaborationForm));

const CatalogueCardWrapper = styled.div`
  background-image: url(${props => props.back}); /* The image used */
  background-position: left;
  background-repeat: no-repeat; /* Do not repeat the image background-position: center;*/
  background-size: cover;
  flex-direction: row;
  min-height: 580px;
  display: flex;
  ${media.desktop`
  align-items: center;
  
  font-size: 15px;
  
  `};

  font-family: 'Montserrat';
  font-size: 17px;
  font-weight: normal;
  flex-wrap: wrap;
`;

const Header = styled.div`
  ${media.desktop`
  font-size: 32px;
  text-align: flex-start;
  `};

  font-size: 40px;
  font-weight: 700;
  margin-top: 42px;
`;

const LittleTitle = styled.div`
  ${media.desktop`
  font-size: 15px;
  
  `};

  font-size: 17px;
  font-weight: normal;
  margin-top: 38px;
`;

const AddressCaption = styled.div`
  ${media.desktop`
  font-size: 22px;
  
  `};

  font-size: 27px;
  font-weight: 700;
  margin-top: 15px;
`;

const FormWrap = styled.div`
  ${media.desktop`
  padding-left: 7vw;
  padding-right: 7vw;
  `};
  padding-left: ${props => (props.halfed ? '70px' : '12vw')};
  padding-right: 12vw;
  display: flex;
  flex-direction: column;
  flex: 2;
  background: ${props => (props.halfed ? 'white' : 'none')};
`;

const ContactWrap = styled.div`
  ${media.desktop`
  padding-left: 7vw;
  padding-right: 7vw;
  `};

  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 2;
  background: #f9f9f9;
  padding-bottom: 42px;
`;

export class ContactFrame extends React.Component {
  //  constructor(props, context) {
  //  super(props, context);
  //    this.state = {
  //    id: this.getId(),
  //  };
  //  this.getId = this.getId.bind(this);
  //}

  //getId() {
  // const currentLocation = this.props.location.pathname.slice(14);
  // return currentLocation;
  //}
  render() {
    return (
      <CatalogueCardWrapper back={bg}>
        {this.props.full && (
          <ContactWrap>
            <div>
              <Header>Контакты</Header>
              <LittleTitle>Адрес:</LittleTitle>
              <AddressCaption>
                г. Брест, ул. Куйбышева 9,
                <br /> оф. 310.
              </AddressCaption>
              <LittleTitle>Телефон:</LittleTitle>
              <AddressCaption>Мтс 29 710 73 38 (Shop)</AddressCaption>
              <AddressCaption>+375 162 23 67 91 (Office)</AddressCaption>
              <LittleTitle>Почта:</LittleTitle>
              <AddressCaption>info@bel-solar.by</AddressCaption>
            </div>
          </ContactWrap>
        )}

        <FormWrap halfed={this.props.full}>
          <Header>Свяжитесь с нами</Header>
          <EnhancedForm halfed={this.props.full} />
        </FormWrap>
      </CatalogueCardWrapper>
    );
  }
}

export default ContactFrame;
