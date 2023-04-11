import React from "react";
import styled from "styled-components";
import logo from "../resources/logo.png";
import vk from "../resources/vk.png";
import instagram from "../resources/instagram.png";
import telegram from "../resources/telegram.png";
import facebook from "../resources/facebook.png";
import message from "../resources/message.png";

function Footer() {
	return (
		<Wrapper>
			<div className="footer-content">
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
						<img src={ facebook } alt="usfacebook icon" />
					</a>
				</div>
				<div className="footer-email_subscribe">
					<h4 className="footer-email_subscribe-title title">Рассылка</h4>
					<p class="footer-email_subscribe-text">Отбираем главные события недели, а&nbsp;потом интересно рассказываем о них в нашей рассылке.</p>
					<form class="footer-email_subscribe-form" id="subscribe_form">
						<div className="footer-email_subscribe-form-input">
            	<label for="email-input" class="footer-email_subscribe-form-input-icon">
								<img src={ message } alt="message icon" />
							</label>
							<input type="text" id="email-input" name="email" placeholder="Электронная почта" className="footer-email_subscribe-form-input-text" />
						</div>
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
					 &copy; Давай Сходим, 2023
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
	
	.footer-content {
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
		height: 89px;
		grid-area: logo;
	}

	.footer-logo img {
		height: 4em;
	}
	
	.footer-social_networks {
		display: flex;
    align-items: center;
    justify-content: flex-start;
		grid-area: social-networks;
    grid-column-gap: 8px;
		height: 50px;
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
		display: flex;
		align-items: center;
		background: var(--clr-white);
    border: 1px solid var(--clr-grey2);
    border-radius: 4px;
    padding: 0 12px;
	}
	
	.footer-email_subscribe-form-input-icon {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 24px;
		height: 24px;
	}
	
	.footer-email_subscribe-form-input-text {
		width: 100%;
		height: 55px;
		border: none;
    font-size: 14px;
    line-height: 16px;
    margin-left: 7px;
		padding: 12px 0;
	}

	.footer-email_subscribe-form-input-text:focus{
    outline: none;
	}

	.footer-email_subscribe-form-button {
		width: 100%;
		height: 44px;
    background: var(--clr-orange-1);
    color: var(--clr-white);
		border: none;
    border-radius: 4px;
		margin-top: 8px;
		padding: 10px 12px;
	}
	
	.footer-about_project {
		grid-area: about-project;
		width: 290.5px;
		height: 142px;
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
		transition: var(--transition);
	}
	
	.footer-about_project-links *:hover {
    color: var(--clr-orange-1);
	}
	
	.footer-agreements {
		grid-area: agreements;
		display: flex;
    flex-wrap: wrap;
    gap: 16px;
		height: 41px;
    margin-top: 16px;
	}
	
	.footer-agreements * {
		line-height: 20px;
		font-size: 14px;
		transition: var(--transition);
	}
	
	.footer-agreements *:hover {
    color: var(--clr-orange-1);
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
