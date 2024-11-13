import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
	background-color: #fff;
  /* border-top-right-radius: 0;
  border-bottom-right-radius: 0; */
	border-radius: 6px;
	box-shadow:
		hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
		hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
	width: 100%;
	/* padding: 25px; */

  .avatar {
  position: relative;
  align-self: center;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: white; /* Adjust as needed */
  border: #15B097 2px solid;
}
`;

export const SidePanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
	background-color: #1c2024;
	border-radius: 6px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
	box-shadow:
		hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
		hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
	width: 25%;
	padding: 25px;
  position: fixed;
  left: 0;
  height: 100%;
`;