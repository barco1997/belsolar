/**
 *
 * CreateEyelandPage
 *
 */

import React from 'react';
//  import PropTypes from 'prop-types';
import { media } from '../../utils/media';
//  import { Helmet } from 'react-helmet';
import styled from 'styled-components';

//  import SendButton from 'components/SendButton';
//  import EyelandTagBlock from 'components/EyelandTagBlock';
//  import SocialTagBlock from 'components/SocialTagBlock';
//  import TagInputField from 'components/TagInputField';
//  import AttachIconButton from 'components/AttachIconButton';
//  import SocialInput from 'components/SocialInput';
//  import PlaceMap from 'containers/PlaceMap';
//  import {
//    withStyles,
//    MuiThemeProvider,
//    createMuiTheme,
//  } from '@material-ui/core/styles';
//  import TextField from '@material-ui/core/TextField';
//  import Grid from '@material-ui/core/Grid';
//  import ChipInput from 'material-ui-chip-input';
//  import { withFormik } from 'formik';
//  import * as Yup from 'yup';
import NavBar from '../../components/NavBar/index';
//  import LinkButton from '../../components/LinkButton/index';
import Footer from '../../components/Footer/index';
import ScrollToTopOnMount from '../../components/ScrollToTopOnMount';
//  import CouponHistory from '../../components/CouponHistory';
//  import GoodHistory from '../../components/GoodHistory';
// import messages from './messages';
import background from './main.png';
import photo1 from './photo1.png';
import photo2 from './photo2.png';

import { UsCard } from '../../components/UsCard';
import { NewCard } from '../../components/NewCard';
import { TeamFrame } from '../../components/TeamFrame';

const CouponInfoWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const BackGround = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  z-index: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const StyledBar = styled.div`
  width: 100%;
  position: fixed;

  left: 0px;
  top: 0px;
  z-index: 5;
`;
const StyledFooter = styled.div`
  width: 100%;
  align-self: flex-end;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
  ${media.phone`
  display: none;
  `};
`;
/* eslint-disable react/prefer-stateless-function */
export class AboutUsPage extends React.Component {
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
      <CouponInfoWrapper>
        <ScrollToTopOnMount />
        <StyledBar>
          <NavBar />
        </StyledBar>
        <BackGround>
          <div style={{ marginTop: '70px' }} />
          <StyledImage src={background} alt="lol" />
          <UsCard
            img={photo1}
            title="Кто мы?"
            text="Компания ’’Белсолар’’ основана в 2016 году для внедрения инновационных технологий в сфере энергетики для потребительских нужд населению. Мы работаем с крупными партнерами в Германии, Польше, Украине, Китае."
          />

          {/*<UsCard
            right
            img={photo2}
            title="Чем мы занимаемся?"
            text="Основное направление компании оптовая и розничная торговля. Мы предлагаем комплексное предложение для ваших помещений. Применяем индивидуальный подход к каждому техническому зданию в соответствии с эксплуатационными требованиями, особенностями географического положения и климатических условий. Занимаемся установкой и обслуживанием экологических энергосистем, предназначеных для комбинированного и автономного электроснабжения и обогрева различных обьектов. Комплектуем, устанавливаем, настраиваем, обслуживаем. Одним из принципов, которым мы руководствуемся при работе с каждым клиентом-это достоверная информация, индивидуальный подход. Наша компания обеспечивает полный многоуровневый контроль продукта ответственность за качество, экономичность, экологичность, безопастность.
            Среди предлагаемых нами товаров вы найдете все необходимое, чтобы воплотить в жизнь свою мечту. Инновационные технологии постепенно становятся сегодняшней реальностью окружая нас теплом и уютом."
          />*/}
          <NewCard
            right
            img={photo2}
            title="Чем мы занимаемся?"
            text="Основное направление компании оптовая и розничная торговля. Мы предлагаем комплексное предложение для ваших помещений. Применяем индивидуальный подход к каждому техническому зданию в соответствии с эксплуатационными требованиями, особенностями географического положения и климатических условий. Занимаемся установкой и обслуживанием экологических энергосистем, предназначеных для комбинированного и автономного электроснабжения и обогрева различных обьектов. Комплектуем, устанавливаем, настраиваем, обслуживаем. Одним из принципов, которым мы руководствуемся при работе с каждым клиентом-это достоверная информация, индивидуальный подход. Наша компания обеспечивает полный многоуровневый контроль продукта ответственность за качество, экономичность, экологичность, безопастность.
            Среди предлагаемых нами товаров вы найдете все необходимое, чтобы воплотить в жизнь свою мечту. Инновационные технологии постепенно становятся сегодняшней реальностью окружая нас теплом и уютом."
          />
          <TeamFrame header />
          <StyledFooter>
            <Footer />
          </StyledFooter>
        </BackGround>
      </CouponInfoWrapper>
    );
  }
}

export default AboutUsPage;
