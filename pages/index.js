import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
        <Widget.Header>
            <h1>Star Wars</h1>
        </Widget.Header>
          <Widget.Content>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, distinctio expedita est quas error fugit labore nemo eligendi consectetur ipsum commodi nihil, nesciunt ab! Fuga eaque aliquam non quibusdam accusantium!</p>
          </Widget.Content>
        </Widget>
        
        <Widget>
          <Widget.Content>
            <h1>Quiz</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, distinctio expedita est quas error fugit labore nemo eligendi consectetur ipsum commodi nihil, nesciunt ab! Fuga eaque aliquam non quibusdam accusantium!</p>
          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/lucasnoman"/>
    </QuizBackground>
  );
}
