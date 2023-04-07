import React from "react";
import styled from 'styled-components';
import logo from "../../resources/logo.png";
import vk from "../../resources/vk.png";
import instagram from "../../resources/instagram.png";
import telegram from "../../resources/telegram.png";
import usfacebook from "../../resources/facebook.png";

function Footer() {
	return (
		<Wrapper>
			<div className="footer-top">
				<div className="footer-logo">
					<img src={ logo } alt="Давай Сходим!" />
				</div>
				<div className="footer-social_networks">
					<a href="https://vk.com/sxodim" className="footer-social_network-item">
						<img src={ vk } alt="vk icon" />
					</a>
					<a href="https://www.instagram.com/sxodim/" className="footer-social_network-item">
						<img src={ instagram } alt="instagram icon" />
					</a>
					<a href="https://telegram.me/sxodim" className="footer-social_network-item">
						<img src={ telegram } alt="telegram icon" />
					</a>
					<a href="https://www.facebook.com/sxodim" className="footer-social_network-item">
						<img src={ usfacebook } alt="usfacebook icon" />
					</a>
				</div>
				<div className="footer-email_subscribe">
					<h4 className="footer-email_subscribe-title title">Рассылка</h4>
					<p class="footer-email_subscribe-text">Отбираем главные события недели, а&nbsp;потом интересно рассказываем о них в нашей рассылке.</p>
					<form class="footer-email_subscribe-form" id="subscribe_form">
            <label for="email-input">
              <div class="impression-icon "></div>
						</label>
						<input type="text" id="email-input" name="email" placeholder="Электронная почта" className="footer-email_subscribe-form-input" />
            <button class="footer-email_subscribe-form-button" type="submit">Подписаться</button>
          </form>
				</div>
        <div class="footer-about_project">
          <h4 class="footer-about_project-title title">О «Давай Сходим»</h4>
          <div class="footer-about_project-links">
            <a href="https://sxodim.com/almaty/about" className="link">О Проекте</a>
            <a href="https://sxodim.com/almaty/contacts" className="link">Контакты</a>
          </div>
        </div> 
				<div class="footer-agreements">
          <a href="https://sxodim.com/booking_rules" className="link">Правила использования и возврата</a>
          <a href="https://sxodim.com/polzovatelskoe-soglashenie" className="link">Пользовательское соглашение</a>
        </div> 
			</div>

			<div className="header-bottom">
				<p className="header-privacy_text">
					 &copy; Давай Сходим,
					<span id="copyright">
							<script>document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))</script>
					</span>
				</p>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.footer`
	background: var(--clr-grey1);
	color: rgba(0, 0, 0, 0.48);
	
	.title {
		color: rgba(0, 0, 0, 0.865);
	}
	
	.link {
		color: rgba(0, 0, 0, 0.48);
	}
	
	.footer-top {
		display: grid;
		column-gap: 2em;
		grid-template-areas:
			"logo about-project email-subscribe"
			"social-networks about-project email-subscribe"
			"agreements agreements email-subscribe"
			"bottom bottom bottom";
		width: 100%;
		max-width: 1120px;
		margin: 0 auto;
		padding: 32px 16px;
	}

	.footer-logo {
		grid-area: logo;
	}

	.footer-logo img {
		height: 3em;
	}
	
	.footer-social_networks {
		display: flex;
    align-items: center;
    justify-content: flex-start;
		grid-area: social-networks;
    grid-column-gap: 8px;
	}

	.footer-social_network-item {
		width: 2em;
		height: 2em;
	}
	
	.footer-social_network-item img {
		width: inherit;
	}

	.footer-email_subscribe {
		display: flex;
    flex-wrap: wrap;
		grid-area: email-subscribe;
		width: 581.5px;
	}
	
	.footer-email_subscribe-title,
	.footer-email_subscribe-text,
	.footer-about_project-title,
	.footer-about_project-links {
		line-height: 22px;
		display: block;
		font-size: 16px;
	}

	.footer-email_subscribe-title {
    width: 100%;
		font-weight: 500;
	}
	
	.footer-email_subscribe-text {
		margin-top: .5em;
	}
	
	.footer-email_subscribe-form {
		position: relative;
		width: 100%;
		margin-top: 1em;
	}
	
	.footer-email_subscribe-form-input {
		height: 3.4375em;
	}

	.footer-email_subscribe-form-input {
		width: 100%;
		border: none;
    font-size: 14px;
    line-height: 16px;
    // margin-left: .4375em;
    padding: .75em 0;
	}

	.footer-email_subscribe-form-button {
		width: 100%;
    background: var(--clr-orange);
    color: var(--clr-white);
		border: none;
    border-radius: 4px;
		margin-top: .5em;
		padding: .625em .75em;
	}
	
	.footer-about_project {
		grid-area: about-project;
		width: 290.5px;
		padding-bottom: 1em;
	}
	
	.footer-about_project-title {
		font-weight: 500;
    width: 100%;
    margin-bottom: 1em;
	}
	
	.footer-about_project-links {
		width: 100%;
		display: flex;
    flex-wrap: wrap;
    row-gap: 1em;
	}
	
	.footer-about_project-links * {
		width: 50%;
	}
	
	.footer-agreements {
		grid-area: agreements;
		display: flex;
    flex-wrap: wrap;
    gap: 16px;
    line-height: 20px;
    font-size: 14px;
    margin-top: 1em;
	}

	.header-bottom {
		grid-area: bottom;
		width: 100%;
		height: 3em;
		background: var(--clr-grey2);
    padding: 1em;
	}

	.header-privacy_text {
		text-align: center;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.48);
	}
`;

export default Footer;