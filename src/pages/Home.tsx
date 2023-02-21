import { H2, Link, ParMd, SingleColumnLayout } from '@daohaus/ui';
import styled from 'styled-components';
import { HausAnimated } from '../components/HausAnimated';

const LinkBox = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
`;

export const Home = () => {
  return (
    <SingleColumnLayout>
      <H2>DAOhaus</H2>
      <HausAnimated />
    </SingleColumnLayout>
  );
};
