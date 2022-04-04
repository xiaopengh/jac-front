import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, Button, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';
import Inscription from './Inscription';
import { NavigationContainer } from '@react-navigation/native';

export default class Inscription1 extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <ScrollView data-layer="efd5f36d-49d2-4a87-904a-b5f243f41094" style={styles.inscription1}>
        <View>
          <Button
        title="Next page"
        onPress={() => Navigation.navigater(Inscription)}
      />
        <Svg data-layer="aac789f2-efa4-42b7-a13a-7bb33532a220" style={styles.inscription1_x1a360e0db} preserveAspectRatio="none" viewBox="0 0.0000038146970382513246 284 284" fill="rgba(255, 255, 255, 0)"><Defs><Pattern id="img-x1a360e0db" patternContentUnits="userSpaceOnUse" width="100%" height="100%"><SvgImage xlinkHref={require('./assets/x1a360e0db.png')} x="0" y="0" width="284.00px" height="284.00px" /></Pattern></Defs><SvgPath d="M 0 141.9999847412109 C 0 63.57668304443359 63.5766487121582 3.814697038251325e-06 142 3.814697038251325e-06 C 220.4251556396484 3.814697038251325e-06 284 63.57668304443359 284 141.9999847412109 C 284 220.4251556396484 220.4251556396484 284 142 284 C 63.5766487121582 284 0 220.4251556396484 0 141.9999847412109 Z" fill="url(#img-x1a360e0db)" /></Svg>
        </View>
        <View data-layer="82d6e4ca-edf3-4d48-b4c4-b6d53ce4d098" style={styles.inscription1_x6}></View>
        <Text data-layer="b6b28859-2621-412f-b60b-50e0dbec8efd" style={styles.inscription1_seConnecter08b635c0}>Se connecter</Text>
        <Text data-layer="e385d0d8-4a9a-4535-ba61-cd66354ccc0a" style={styles.inscription1_pasEncoreInscritSinscrire4ca9ea83}>Pas encore inscrit ?  S'inscrire</Text>
        <Svg data-layer="2ed5728b-b41d-4064-96e7-7391655745aa" style={styles.inscription1_croiseLesYeux448dfb8f} preserveAspectRatio="none" viewBox="-0.004445910453796387 1.003000259399414 19.649017333984375 18" fill="rgba(154, 159, 167, 1)"><SvgPath d="M 19.04429817199707 7.890697956085205 C 18.30547904968262 6.68087100982666 17.37353324890137 5.600191593170166 16.28545570373535 4.691553115844727 L 18.57698822021484 2.400017976760864 C 18.89668655395508 2.080498456954956 18.89668655395508 1.562312841415405 18.57707786560059 1.242705583572388 C 18.25746917724609 0.9230983257293701 17.73928260803223 0.9230985641479492 17.41967582702637 1.242705821990967 L 14.92772102355957 3.738110065460205 C 13.38289356231689 2.820532083511353 11.61679744720459 2.342290163040161 9.82005500793457 2.355005025863647 C 4.753307819366455 2.355005502700806 1.8659747838974 5.82340669631958 0.5958099961280823 7.890697956085205 C -0.2045314013957977 9.185182571411133 -0.2045314013957977 10.82081985473633 0.5958108305931091 12.11530590057373 C 1.334630846977234 13.32513427734375 2.266574859619141 14.4058141708374 3.354653358459473 15.31445217132568 L 1.063119292259216 17.60598564147949 C 0.7434248328208923 17.92550659179688 0.7434250116348267 18.44369125366211 1.063031911849976 18.76329612731934 C 1.382638812065125 19.08290481567383 1.900824069976807 19.08290481567383 2.220431327819824 18.76329612731934 L 4.718116760253906 16.26543617248535 C 6.261031150817871 17.18287086486816 8.025023460388184 17.66192817687988 9.82005786895752 17.6510009765625 C 14.88679981231689 17.65099906921387 17.77413368225098 14.18259525299072 19.04429817199707 12.11530494689941 C 19.84464263916016 10.82081890106201 19.84464263916016 9.185182571411133 19.04429817199707 7.890697956085205 Z M 1.9903724193573 11.25843524932861 C 1.514880537986755 10.489013671875 1.514880061149597 9.516990661621094 1.99037230014801 8.74756908416748 C 3.082124948501587 6.974902629852295 5.54961633682251 3.991815805435181 9.820054054260254 3.991815805435181 C 11.17883205413818 3.984203100204468 12.51852989196777 4.311678409576416 13.72057437896729 4.945257186889648 L 12.07312393188477 6.592708110809326 C 10.45311450958252 5.517168998718262 8.299532890319824 5.732492923736572 6.924539089202881 7.107487201690674 C 5.549545288085938 8.482480049133301 5.334221363067627 10.63606071472168 6.40976095199585 12.25607109069824 L 4.519244194030762 14.14658641815186 C 3.516782760620117 13.33613395690918 2.661333084106445 12.3591480255127 1.990372896194458 11.25843524932861 Z M 12.27526950836182 10.00300121307373 C 12.27526950836182 11.35898017883301 11.17603397369385 12.45821666717529 9.820054054260254 12.45821666717529 C 9.455465316772461 12.45680522918701 9.095927238464355 12.37286472320557 8.768403053283691 12.21269416809082 L 12.02974891662598 8.951350212097168 C 12.18991851806641 9.278873443603516 12.27385902404785 9.638411521911621 12.27526950836182 10.00300121307373 Z M 7.364839553833008 10.00300121307373 C 7.364839553833008 8.647022247314453 8.464076995849609 7.547786712646484 9.82005500793457 7.547786712646484 C 10.18464374542236 7.549197673797607 10.54418087005615 7.633135795593262 10.87170600891113 7.793307304382324 L 7.610361099243164 11.05465221405029 C 7.450189113616943 10.72712707519531 7.366250038146973 10.36759090423584 7.364838123321533 10.00300216674805 Z M 17.64973831176758 11.25843524932861 C 16.5579833984375 13.03110027313232 14.09049320220947 16.01418685913086 9.820054054260254 16.01418685913086 C 8.46127986907959 16.02179908752441 7.121580600738525 15.69432353973389 5.919537544250488 15.06074523925781 L 7.5669846534729 13.41329574584961 C 9.186996459960938 14.48883533477783 11.34057807922363 14.27350902557373 12.7155704498291 12.89851665496826 C 14.09056377410889 11.52352237701416 14.30588912963867 9.369940757751465 13.23034954071045 7.749932289123535 L 15.12086391448975 5.859416484832764 C 16.12332725524902 6.669867038726807 16.9787769317627 7.646852493286133 17.64973640441895 8.747568130493164 C 18.12523078918457 9.516990661621094 18.12523078918457 10.489013671875 17.64973640441895 11.25843334197998 Z"  /></Svg>
        <Svg data-layer="deba775d-71e3-4559-8218-cb280cf1a340" style={styles.inscription1_x1} preserveAspectRatio="none" viewBox="-0.5 -0.5 310.6490173339844 1" fill="transparent"><SvgPath d="M 0 0 L 309.6490173339844 0"  /></Svg>
        <Svg data-layer="880873f2-a6c9-4b9b-bf0f-a225324d241d" style={styles.inscription1_x2} preserveAspectRatio="none" viewBox="-0.5 -0.5 310.6490173339844 1" fill="transparent"><SvgPath d="M 0 0 L 309.6490173339844 0"  /></Svg>
        <Svg data-layer="e3fde41a-5f50-4c88-9ea7-9b29ac45ed27" style={styles.inscription1_a1f235c1e} preserveAspectRatio="none" viewBox="-0.0010459973709657788 0 24.00104522705078 24.0072021484375" fill="rgba(154, 159, 167, 1)"><SvgPath d="M 12 0 C 5.37555456161499 0.007163047790527344 0.007164955139160156 5.375551223754883 0 11.99999713897705 C -0.1260000020265579 21.57299995422363 11.15900039672852 27.42900085449219 18.89999961853027 21.81700134277344 C 19.20284271240234 21.61554908752441 19.37242317199707 21.26554489135742 19.34282875061035 20.90302467346191 C 19.31323432922363 20.54050254821777 19.08913230895996 20.22263717651367 18.75762557983398 20.07296943664551 C 18.42611694335938 19.92330360412598 18.03948593139648 19.96543884277344 17.74799919128418 20.1830005645752 C 11.30000019073486 24.85600090026855 1.899999976158142 19.97800064086914 2 12 C 2.549000024795532 -1.266000032424927 21.45299911499023 -1.263000011444092 22 12 L 22 14 C 22 15.10456943511963 21.10456848144531 16 20 16 C 18.89542961120605 16 18 15.10456943511963 18 14 L 18 12 C 17.74799919128418 4.071000099182129 6.250999927520752 4.072000026702881 6 12 C 6.023826122283936 14.48918437957764 7.577979564666748 16.70669937133789 9.90965461730957 17.57841682434082 C 12.24132823944092 18.45013427734375 14.86905384063721 17.79605293273926 16.5200023651123 15.9330005645752 C 17.41189193725586 17.50710487365723 19.24932861328125 18.28656768798828 21.00100326538086 17.83389663696289 C 22.75267601013184 17.38122367858887 23.98241806030273 15.80913352966309 24.00000190734863 14 L 24 12 C 23.99283599853516 5.375553131103516 18.62444686889648 0.00716400146484375 12 0 Z M 12 16 C 9.790861129760742 16 8 14.20913887023926 8 12 C 8 9.790861129760742 9.790861129760742 8 12 8 C 14.20913887023926 8 16 9.790861129760742 16 12 C 16 14.20913887023926 14.20913887023926 16 12 16 Z"  /></Svg>
        <View data-layer="6376852c-2dec-41b0-bd35-aae8115372d3" style={styles.inscription1_fermerACle13610d65}>
            <Svg data-layer="112776dc-6e10-4d22-a3cd-8c4d435b9394" style={styles.inscription1_fermerACle13610d65_x708ea5e61} preserveAspectRatio="none" viewBox="2 0 20 24" fill="rgba(154, 159, 167, 1)"><SvgPath d="M 19 8.423999786376953 L 19 7 C 19 3.134006500244141 15.86599349975586 0 12.00000095367432 0 C 8.134007453918457 0 5.000000953674316 3.134006977081299 5.000000953674316 7.000000476837158 L 5 8.423999786376953 C 3.180052042007446 9.218287467956543 2.002611637115479 11.0142765045166 2 13 L 2 19 C 2.003306865692139 21.76005363464355 4.239948272705078 23.99669456481934 7.000000953674316 24 L 17 24 C 19.76005363464355 23.99669456481934 21.99669647216797 21.76005363464355 22.00000190734863 19 L 22 13 C 21.99738693237305 11.0142765045166 20.81994819641113 9.218288421630859 19 8.423999786376953 Z M 7 7 C 7 4.23857593536377 9.238576889038086 2 12 2 C 14.76142406463623 2 17 4.238576412200928 17 7 L 17 8 L 7 8 L 7 7 Z M 20 19 C 20 20.6568546295166 18.6568546295166 22 17 22 L 7 22 C 5.343146324157715 22 4.000000476837158 20.6568546295166 4.000000476837158 19 L 4 13 C 4.000000476837158 11.3431453704834 5.343146800994873 10 7.000000953674316 10 L 17 10 C 18.6568546295166 10 20 11.3431453704834 20 13 L 20 19 Z"  /></Svg>
            <Svg data-layer="026164c4-fa67-404b-bab0-2062ce5f901a" style={styles.inscription1_fermerACle13610d65_x8f3c9507c} preserveAspectRatio="none" viewBox="11 14 2 4" fill="rgba(154, 159, 167, 1)"><SvgPath d="M 12 14 C 11.44771480560303 14 11 14.44771575927734 11 15 L 11 17 C 11 17.55228424072266 11.44771575927734 18 12 18 C 12.55228519439697 18 13 17.55228424072266 13 17 L 13 15 C 13 14.44771480560303 12.55228424072266 14 12 14 Z"  /></Svg>
        </View>
        <Svg data-layer="0ebf56a2-36fd-43d5-890f-19cebaa5a4ea" style={styles.inscription1_x18} preserveAspectRatio="none" viewBox="-2 -2 288 4" fill="transparent"><SvgPath d="M 0 0 L 284 0"  /></Svg>
        <View data-layer="9f6bac5a-3825-49fb-a3de-888ba69e7e06" style={styles.inscription1_x45}></View>
        <Text data-layer="517de5b5-ef25-4430-a2ed-ad22a717a430" style={styles.inscription1_seConnecter}>Se connecter</Text>
        <Text data-layer="b9152694-7b24-4f11-9d06-f516fe44c1b0" style={styles.inscription1_motDePasse}>Mot de passe</Text>
        <Text data-layer="9d157a07-d410-453b-a3c0-3be2f1bbe13c" style={styles.inscription1_pasEncoreInscritSinscrire}>Pas encore inscrit ?  S'inscrire</Text>
        <Text data-layer="5fcbe4ec-9c3f-4c62-8961-e4ae969b793f" style={styles.inscription1_motDePasseOublie}>Mot de passe oublié ?</Text>
        <Text data-layer="c923bf5b-eae0-4152-a0d0-13c37dd3da0c" style={styles.inscription1_adresseMail}>Adresse mail</Text>
        <Svg data-layer="e8dd0098-a61f-41ae-8193-b856d501dfed" style={styles.inscription1_croiseLesYeux} preserveAspectRatio="none" viewBox="-0.004445910453796387 1.003000259399414 19.649017333984375 18" fill="rgba(154, 159, 167, 1)"><SvgPath d="M 19.04429817199707 7.890697956085205 C 18.30547904968262 6.68087100982666 17.37353324890137 5.600191593170166 16.28545570373535 4.691553115844727 L 18.57698822021484 2.400017976760864 C 18.89668655395508 2.080498456954956 18.89668655395508 1.562312841415405 18.57707786560059 1.242705583572388 C 18.25746917724609 0.9230983257293701 17.73928260803223 0.9230985641479492 17.41967582702637 1.242705821990967 L 14.92772102355957 3.738110065460205 C 13.38289356231689 2.820532083511353 11.61679744720459 2.342290163040161 9.82005500793457 2.355005025863647 C 4.753307819366455 2.355005502700806 1.8659747838974 5.82340669631958 0.5958099961280823 7.890697956085205 C -0.2045314013957977 9.185182571411133 -0.2045314013957977 10.82081985473633 0.5958108305931091 12.11530590057373 C 1.334630846977234 13.32513427734375 2.266574859619141 14.4058141708374 3.354653358459473 15.31445217132568 L 1.063119292259216 17.60598564147949 C 0.7434248328208923 17.92550659179688 0.7434250116348267 18.44369125366211 1.063031911849976 18.76329612731934 C 1.382638812065125 19.08290481567383 1.900824069976807 19.08290481567383 2.220431327819824 18.76329612731934 L 4.718116760253906 16.26543617248535 C 6.261031150817871 17.18287086486816 8.025023460388184 17.66192817687988 9.82005786895752 17.6510009765625 C 14.88679981231689 17.65099906921387 17.77413368225098 14.18259525299072 19.04429817199707 12.11530494689941 C 19.84464263916016 10.82081890106201 19.84464263916016 9.185182571411133 19.04429817199707 7.890697956085205 Z M 1.9903724193573 11.25843524932861 C 1.514880537986755 10.489013671875 1.514880061149597 9.516990661621094 1.99037230014801 8.74756908416748 C 3.082124948501587 6.974902629852295 5.54961633682251 3.991815805435181 9.820054054260254 3.991815805435181 C 11.17883205413818 3.984203100204468 12.51852989196777 4.311678409576416 13.72057437896729 4.945257186889648 L 12.07312393188477 6.592708110809326 C 10.45311450958252 5.517168998718262 8.299532890319824 5.732492923736572 6.924539089202881 7.107487201690674 C 5.549545288085938 8.482480049133301 5.334221363067627 10.63606071472168 6.40976095199585 12.25607109069824 L 4.519244194030762 14.14658641815186 C 3.516782760620117 13.33613395690918 2.661333084106445 12.3591480255127 1.990372896194458 11.25843524932861 Z M 12.27526950836182 10.00300121307373 C 12.27526950836182 11.35898017883301 11.17603397369385 12.45821666717529 9.820054054260254 12.45821666717529 C 9.455465316772461 12.45680522918701 9.095927238464355 12.37286472320557 8.768403053283691 12.21269416809082 L 12.02974891662598 8.951350212097168 C 12.18991851806641 9.278873443603516 12.27385902404785 9.638411521911621 12.27526950836182 10.00300121307373 Z M 7.364839553833008 10.00300121307373 C 7.364839553833008 8.647022247314453 8.464076995849609 7.547786712646484 9.82005500793457 7.547786712646484 C 10.18464374542236 7.549197673797607 10.54418087005615 7.633135795593262 10.87170600891113 7.793307304382324 L 7.610361099243164 11.05465221405029 C 7.450189113616943 10.72712707519531 7.366250038146973 10.36759090423584 7.364838123321533 10.00300216674805 Z M 17.64973831176758 11.25843524932861 C 16.5579833984375 13.03110027313232 14.09049320220947 16.01418685913086 9.820054054260254 16.01418685913086 C 8.46127986907959 16.02179908752441 7.121580600738525 15.69432353973389 5.919537544250488 15.06074523925781 L 7.5669846534729 13.41329574584961 C 9.186996459960938 14.48883533477783 11.34057807922363 14.27350902557373 12.7155704498291 12.89851665496826 C 14.09056377410889 11.52352237701416 14.30588912963867 9.369940757751465 13.23034954071045 7.749932289123535 L 15.12086391448975 5.859416484832764 C 16.12332725524902 6.669867038726807 16.9787769317627 7.646852493286133 17.64973640441895 8.747568130493164 C 18.12523078918457 9.516990661621094 18.12523078918457 10.489013671875 17.64973640441895 11.25843334197998 Z"  /></Svg>
        <Svg data-layer="699a6b30-4369-4698-ad39-c337956563c7" style={styles.inscription1_x19} preserveAspectRatio="none" viewBox="-0.5 -0.5 310.6490173339844 1" fill="transparent"><SvgPath d="M 0 0 L 309.6490173339844 0"  /></Svg>
        <Svg data-layer="80c1868d-7e16-4fae-9a8d-b4fbde409602" style={styles.inscription1_x20} preserveAspectRatio="none" viewBox="-0.5 -0.5 310.6490173339844 1" fill="transparent"><SvgPath d="M 0 0 L 309.6490173339844 0"  /></Svg>
        <Svg data-layer="362afd2a-5102-466b-8f57-71131eaafd79" style={styles.inscription1_a} preserveAspectRatio="none" viewBox="-0.0010459973709657788 0 24.00104522705078 24.0072021484375" fill="rgba(154, 159, 167, 1)"><SvgPath d="M 12 0 C 5.37555456161499 0.007163047790527344 0.007164955139160156 5.375551223754883 0 11.99999713897705 C -0.1260000020265579 21.57299995422363 11.15900039672852 27.42900085449219 18.89999961853027 21.81700134277344 C 19.20284271240234 21.61554908752441 19.37242317199707 21.26554489135742 19.34282875061035 20.90302467346191 C 19.31323432922363 20.54050254821777 19.08913230895996 20.22263717651367 18.75762557983398 20.07296943664551 C 18.42611694335938 19.92330360412598 18.03948593139648 19.96543884277344 17.74799919128418 20.1830005645752 C 11.30000019073486 24.85600090026855 1.899999976158142 19.97800064086914 2 12 C 2.549000024795532 -1.266000032424927 21.45299911499023 -1.263000011444092 22 12 L 22 14 C 22 15.10456943511963 21.10456848144531 16 20 16 C 18.89542961120605 16 18 15.10456943511963 18 14 L 18 12 C 17.74799919128418 4.071000099182129 6.250999927520752 4.072000026702881 6 12 C 6.023826122283936 14.48918437957764 7.577979564666748 16.70669937133789 9.90965461730957 17.57841682434082 C 12.24132823944092 18.45013427734375 14.86905384063721 17.79605293273926 16.5200023651123 15.9330005645752 C 17.41189193725586 17.50710487365723 19.24932861328125 18.28656768798828 21.00100326538086 17.83389663696289 C 22.75267601013184 17.38122367858887 23.98241806030273 15.80913352966309 24.00000190734863 14 L 24 12 C 23.99283599853516 5.375553131103516 18.62444686889648 0.00716400146484375 12 0 Z M 12 16 C 9.790861129760742 16 8 14.20913887023926 8 12 C 8 9.790861129760742 9.790861129760742 8 12 8 C 14.20913887023926 8 16 9.790861129760742 16 12 C 16 14.20913887023926 14.20913887023926 16 12 16 Z"  /></Svg>
        <View data-layer="a454fd55-54b7-467b-84d2-e7aab4089d1f" style={styles.inscription1_fermerACle}>
            <Svg data-layer="b8641ccc-a95d-49a3-9f29-8af1fa99de89" style={styles.inscription1_fermerACle_x7} preserveAspectRatio="none" viewBox="2 0 20 24" fill="rgba(154, 159, 167, 1)"><SvgPath d="M 19 8.423999786376953 L 19 7 C 19 3.134006500244141 15.86599349975586 0 12.00000095367432 0 C 8.134007453918457 0 5.000000953674316 3.134006977081299 5.000000953674316 7.000000476837158 L 5 8.423999786376953 C 3.180052042007446 9.218287467956543 2.002611637115479 11.0142765045166 2 13 L 2 19 C 2.003306865692139 21.76005363464355 4.239948272705078 23.99669456481934 7.000000953674316 24 L 17 24 C 19.76005363464355 23.99669456481934 21.99669647216797 21.76005363464355 22.00000190734863 19 L 22 13 C 21.99738693237305 11.0142765045166 20.81994819641113 9.218288421630859 19 8.423999786376953 Z M 7 7 C 7 4.23857593536377 9.238576889038086 2 12 2 C 14.76142406463623 2 17 4.238576412200928 17 7 L 17 8 L 7 8 L 7 7 Z M 20 19 C 20 20.6568546295166 18.6568546295166 22 17 22 L 7 22 C 5.343146324157715 22 4.000000476837158 20.6568546295166 4.000000476837158 19 L 4 13 C 4.000000476837158 11.3431453704834 5.343146800994873 10 7.000000953674316 10 L 17 10 C 18.6568546295166 10 20 11.3431453704834 20 13 L 20 19 Z"  /></Svg>
            <Svg data-layer="e4c31de8-9add-4ff8-8b13-39425cd1b4f3" style={styles.inscription1_fermerACle_x8} preserveAspectRatio="none" viewBox="11 14 2 4" fill="rgba(154, 159, 167, 1)"><SvgPath d="M 12 14 C 11.44771480560303 14 11 14.44771575927734 11 15 L 11 17 C 11 17.55228424072266 11.44771575927734 18 12 18 C 12.55228519439697 18 13 17.55228424072266 13 17 L 13 15 C 13 14.44771480560303 12.55228424072266 14 12 14 Z"  /></Svg>
        </View>
        <Text data-layer="90d76349-843d-439d-8dec-ae92e429e7b3" style={styles.inscription1_connexionAMon}>Connexion à mon</Text>
        <Text data-layer="fb4cfe16-32a0-4d15-807a-34bcc299a649" style={styles.inscription1_compteUnicef}>compte UNICEF</Text>
    </ScrollView>
    );
  }
}

Inscription1.propTypes = {

}

Inscription1.defaultProps = {

}

const styles = StyleSheet.create({
  "inscription1": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(251, 251, 251, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 428,
    "height": 1000,
    "left": -60,
    "top": 0
  },
  "inscription1_x1a360e0db": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 284,
    "height": 284,
    "left": 78,
    "top": 245
  },
  "inscription1_x6": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(0, 101, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 13,
    "borderTopRightRadius": 13,
    "borderBottomLeftRadius": 13,
    "borderBottomRightRadius": 13,
    "width": 346,
    "height": 48,
    "left": 41,
    "top": 1360
  },
  "inscription1_seConnecter08b635c0": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 18,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Poppins",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 118,
    "height": 25,
    "left": 155,
    "top": 1372
  },
  "inscription1_pasEncoreInscritSinscrire4ca9ea83": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(25, 98, 208, 1)",
    "fontSize": 13,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Poppins",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 190,
    "height": 19,
    "left": 119,
    "top": 1552
  },
  "inscription1_croiseLesYeux448dfb8f": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 19.65,
    "height": 18,
    "left": 367.35,
    "top": 1241
  },
  "inscription1_x1": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 310.65,
    "height": 1,
    "left": 77.35,
    "top": 1199
  },
  "inscription1_x2": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 310.65,
    "height": 1,
    "left": 77.35,
    "top": 1271
  },
  "inscription1_a1f235c1e": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 24,
    "height": 24.01,
    "left": 41,
    "top": 1166
  },
  "inscription1_fermerACle13610d65": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 20,
    "height": 24,
    "left": 43,
    "top": 1236
  },
  "inscription1_fermerACle13610d65_x708ea5e61": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 20,
    "height": 24,
    "left": 0,
    "top": 0
  },
  "inscription1_fermerACle13610d65_x8f3c9507c": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 2,
    "height": 4,
    "left": 9,
    "top": 14
  },
  "inscription1_x18": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 288,
    "height": 4,
    "left": 76.5,
    "top": 560.5
  },
  "inscription1_x45": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(0, 101, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 13,
    "borderTopRightRadius": 13,
    "borderBottomLeftRadius": 13,
    "borderBottomRightRadius": 13,
    "width": 346,
    "height": 48,
    "left": 41,
    "top": 1360
  },
  "inscription1_seConnecter": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 18,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Georgia",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 120,
    "height": 21,
    "left": 154,
    "top": 1374
  },
  "inscription1_motDePasse": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(154, 159, 167, 1)",
    "fontSize": 13,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Georgia",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 86,
    "height": 15,
    "left": 77.35,
    "top": 1243
  },
  "inscription1_pasEncoreInscritSinscrire": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(25, 98, 208, 1)",
    "fontSize": 13,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Poppins",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 190,
    "height": 19,
    "left": 119,
    "top": 1552
  },
  "inscription1_motDePasseOublie": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(25, 98, 208, 1)",
    "fontSize": 13,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Georgia",
    "textAlign": "right",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 142,
    "height": 15,
    "left": 245,
    "top": 1311
  },
  "inscription1_adresseMail": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(154, 159, 167, 1)",
    "fontSize": 13,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Georgia",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 87,
    "height": 15,
    "left": 77.35,
    "top": 1170
  },
  "inscription1_croiseLesYeux": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 19.65,
    "height": 18,
    "left": 367.35,
    "top": 1241
  },
  "inscription1_x19": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 310.65,
    "height": 1,
    "left": 77.35,
    "top": 1199
  },
  "inscription1_x20": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 310.65,
    "height": 1,
    "left": 77.35,
    "top": 1271
  },
  "inscription1_a": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 24,
    "height": 24.01,
    "left": 41,
    "top": 1166
  },
  "inscription1_fermerACle": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 20,
    "height": 24,
    "left": 43,
    "top": 1236
  },
  "inscription1_fermerACle_x7": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 20,
    "height": 24,
    "left": 0,
    "top": 0
  },
  "inscription1_fermerACle_x8": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 2,
    "height": 4,
    "left": 9,
    "top": 14
  },
  "inscription1_connexionAMon": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 30,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Georgia",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 252,
    "height": 33,
    "left": 64,
    "top": 1020
  },
  "inscription1_compteUnicef": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 30,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Georgia",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 252,
    "height": 35,
    "left": 65,
    "top": 1053
  }
});