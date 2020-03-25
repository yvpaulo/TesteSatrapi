import styled from 'styled-components';
import Text from '../Text';

const EmptyText = styled(Text)`
  color: ${({ theme }) => theme.main.colors.white};
  position: absolute;
  width: 17rem;
  text-align: center;
`;

export default EmptyText;
