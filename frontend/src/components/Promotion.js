import React from 'react';
import styled from 'styled-components';

function Promotion() {
	return (
		<Wrapper>
			<a href='https://ads.adfox.ru/312864/clickURL?ad-session-id=6618171681021375920&amp;duid=1678175031169796679&amp;hash=34ff9ed750c37a9d&amp;sj=EzCL1WGj8Xt3rbuv4zFH_pDKv3d8H2Xk9PipWJbnOTqOeRN1d_86FOERhF_BTQ%3D%3D&amp;rand=hxoulwl&amp;rqs=lStgEhX9r2SRbDJkooMBSJGPudsbiTJ4&amp;pr=ipmcbdw&amp;p1=cfgjm&amp;ytt=309512523350021&amp;p5=ohblj&amp;ybv=0.753203&amp;p2=glgo&amp;ylv=0.753203&amp;pf=https%3A%2F%2Fsxodim.com%2Falmaty%2Fevent%2Ffestival-sxodim-fest'>
				<img src='https://avatars.mds.yandex.net/get-adfox-content/2462621/230331_adfox_1070705_6521667.79c8334fa1b488e7e85a0309a207d318.png/optimize.webp' alt='main page promotion' className='promotion-image' />
			</a>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
  justify-content: center;
	
	.promotion-image {
		width: 100%;
		height: auto; 
		vertical-align: middle; 
		max-width: 1000px;
		margin: 16px 0;
	}
`;

export default Promotion;
