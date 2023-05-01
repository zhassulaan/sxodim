import React from "react";
import styled from 'styled-components';

function Preview({ post }) {
	return (
		<Wrapper>
			{/* <div class="right_side">
				<div class="post-info">
					<div class="premier_info">
						<div class="info">
							<div class="title">Заявка на индивидуальный тур</div>
						</div>

						<div class="more_info">
							<div class="group">
								<svg class="svg-icon svg-icon--phone">
									<use xlink:href="https://sxodim.com/app/images/sprite.svg#phone"></use>
								</svg>
							</div>

							<div class="group">
								<svg class="svg-icon svg-icon--phone">
									<use xlink:href="https://sxodim.com/app/images/sprite.svg#link"></use>
								</svg>
							</div>

							<div class="favorite_btn inline_favorite " data-id="49314" data-show_popup="login">
								<svg class="svg-icon svg-icon--favorite">
									<use xlink:href="https://sxodim.com/app/images/sprite.svg#favorite"></use>
								</svg>
								<span>Добавить в избранное</span>
							</div>

							<div class="buy-ticket">
								<a href="https://docs.google.com/forms/d/e/1FAIpQLSfUznFSh3AKY0m1wDlhhuR80wR5gBaxP8jeT8AHcXTiDpwd1w/viewform?usp=sf_link" class="btn normal orange" style="display: flex;">
									<small><nobr>Рассчитать стоимость</nobr></small>
								</a>
							</div>
						</div>

						<div class="rating_wrapper">
							<div class="icon rating_full">
								<span>5</span>
							</div>

							<div class="rating">
								<div class="title">Оценить место:</div>
								<div class="stars  empty_rating">
									<div class="star empty" data-rate="5" data-post="49314"></div>
									<div class="star empty" data-rate="4" data-post="49314"></div>
									<div class="star empty" data-rate="3" data-post="49314"></div>
									<div class="star empty" data-rate="2" data-post="49314"></div>
									<div class="star empty" data-rate="1" data-post="49314"></div>
								</div>
							</div>
						</div>

						<div class="reklama">
							<div id="adfox_166444145906324790" class="" style="text-align: -webkit-center;">
								<a href="https://ads.adfox.ru/312864/clickURL?ad-session-id=5650321681909196193&amp;duid=1678175031169796679&amp;hash=8a4c52d5ddd33687&amp;sj=sOHPe5ppxravp5p7UebeM9gqyWwhaMbYunAhpbQ9KzuSWZGnddr8MAt7wwQTKQ%3D%3D&amp;rand=nlemhhy&amp;rqs=lStgEhX9r2TM5T9khzhNDHE8TIbOEdE-&amp;pr=edelpjr&amp;p1=cfgjd&amp;ytt=370535418691589&amp;p5=ohbli&amp;ybv=0.759458&amp;p2=glgn&amp;ylv=0.759458&amp;pf=https%3A%2F%2Fsxodim.com%2Falmaty%2Fevent%2Ffestival-sxodim-fest%3Futm_source%3Dsxodim%26utm_medium%3Dbanner%26utm_campaign%3Dsxodim-fest%26utm_content%3Ddesktop-240x400-sidebar" target="_blank">
									<img src="https://avatars.mds.yandex.net/get-adfox-content/2804317/230331_adfox_1070705_6521666.ba32f267091505899a91af1eb0f25869.png/optimize.webp" style="width: 100%; height: auto; border: 0px; vertical-align: middle; max-width: 240px;" />
								</a>
							</div>
						</div>
					</div>
				</div>
					
				<div class="left_side">
					<div class="socials_wrapper">
						<div class="socials">
							<span class="st-custom-button" data-network="vk">
								<div class="social vk">
									<svg class="svg-icon svg-icon--vk">
										<use xlink:href="https://sxodim.com/app/images/sprite.svg#vk"></use>
									</svg>
								</div>
							</span>
							<span class="st-custom-button" data-network="facebook">
								<div class="social fb">
									<svg class="svg-icon svg-icon--fb">
										<use xlink:href="https://sxodim.com/app/images/sprite.svg#fb"></use>
									</svg>
								</div>
							</span>
							<span class="st-custom-button" data-network="twitter">
								<div class="social tw">
									<svg class="svg-icon svg-icon--tw">
										<use xlink:href="https://sxodim.com/app/images/sprite.svg#tw"></use>
									</svg>
								</div>
							</span>
						</div>
					</div>

					<div class="content_wrapper">
						<p><br />  Не нашли тур, который подходит именно вам?<br />  <br />  Оформите заявку на sxodim.com на индивидуальный тур или поход на любую дату, количество человек и сложность.<br />  <br />  Достаточно заполнить заявку на нашем сайте, наши надежные и проверенные партнеры в сфере туризма свяжутся с вами и предложат лучшее решение по вашему запросу.</p>
						<p><strong>Что такое индивидуальный тур?</strong></p>
						<p>Индивидуальный тур — любой нестандартный тур, который нельзя забронировать или купить онлайн. Это может быть корпоратив, тимбилдинг, поход в горы или другое событие с выездом на природу.</p>
						<p><strong>Сколько рассчитывается тур?</strong></p>
						<p>Менеджер рассчитает стоимость тура и ответит вам в течение 2-3 часов для уточнения деталей. После согласований вам вышлют смету индивидуального тура.</p>
						<p><strong>Как рассчитывается тур?</strong></p>
						<p>Стоимость тура зависит от локации, длительности и количества человек.</p>
						<div style="margin-top: 16px">
							<div id="adfox_166444137672932583"></div>
						</div>

						<div class="publication">
							Дата публикации: 19.11.2022
						</div>
									
						<div class="tags">
							<a href="https://sxodim.com/almaty/tag/davaj-shodim" class="tag">Давай Сходим</a>
							<a href="https://sxodim.com/almaty/tag/turizm" class="tag">туризм</a>
							<a href="https://sxodim.com/almaty/tag/kuda-shodit-v-almaty" class="tag">куда сходить в Алматы</a>
							<a href="https://sxodim.com/almaty/tag/pokhody-v-gory-almaty" class="tag">походы в горы алматы</a>
							<a href="https://sxodim.com/almaty/tag/individualnye-tury-almaty" class="tag">индивидуальные туры Алматы</a>
						</div>

						<div class="socials_share ">
							<div class="top_text">
								<div class="title">Я пойду!</div>
								<div class="text">
									Отметьтесь и расскажите об этом событии друзьям,
									<br />
									чтобы они смогли к вам присоединиться!
								</div>
							</div>

							<div class="socials">
								<span class="st-custom-button social" data-network="vk">
									<div class="social vk">
										<svg class="svg-icon svg-icon--vk">
											<use xlink:href="https://sxodim.com/app/images/sprite.svg#vk"></use>
										</svg>
										<span>Вконтакте</span>
									</div>
								</span>
								<span class="st-custom-button social" data-network="facebook">
									<div class="social fb">
											<svg class="svg-icon svg-icon--fb">
													<use xlink:href="https://sxodim.com/app/images/sprite.svg#fb"></use>
											</svg>
											<span>Facebook</span>
									</div>
								</span> 
								<span class="st-custom-button social" data-network="telegram">
									<div class="social telegram">
										<svg class="svg-icon svg-icon--telegram">
											<use xlink:href="https://sxodim.com/app/images/sprite.svg#telegram"></use>
										</svg>
									</div>
								</span>
								<span class="st-custom-button social" data-network="whatsapp" data-url="https://sxodim.com/almaty/place/zayavka-na-individualnyy-tur?utm_source=whatsapp&amp;utm_medium=share">
									<div class="social whatsapp">
										<svg class="svg-icon svg-icon--whatsapp">
											<use xlink:href="https://sxodim.com/app/images/sprite.svg?1#whatsapp"></use>
										</svg>
									</div>
								</span>
								<span class="st-custom-button social" data-network="twitter">
									<div class="social tw">
										<svg class="svg-icon svg-icon--tw">
											<use xlink:href="https://sxodim.com/app/images/sprite.svg#tw"></use>
										</svg>
										<span>Twitter</span>
									</div>
								</span>
							</div>
						</div>

						<div id="comments" class="comments">
							<h3>Комментарии (0)</h3>
							<form class="form" method="post" action="/comments">
								<input type="hidden" name="_token" value="0YFVbfIXT0MfK7MkQY2EMmGZqIuWQ4mlbC10jng5" />
								<input name="post_id" type="hidden" value="49314" />

								<div class="set_review_rating">
									<div class="label">Оценить место:</div>
									<div class="stars">
										<div class="star" data-rate="5"></div>
										<div class="star" data-rate="4"></div>
										<div class="star" data-rate="3"></div>
										<div class="star" data-rate="2"></div>
										<div class="star" data-rate="1"></div>
										<input type="hidden" name="rating" />
									</div>
								</div>
								
								<textarea name="text" placeholder="Написать комментарий"></textarea>
								<button class="btn big orange submit_comment" type="submit">Опубликовать</button>
							</form>
						</div>
					</div>
				</div>
			</div> */}
		</Wrapper>
	);
}

const Wrapper = styled.div`
	
`;

export default Preview;
