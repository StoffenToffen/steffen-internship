import {
	faDiscord,
	faInstagram,
	faReddit,
	faTiktok,
	faTwitter,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import FooterLogo from "../assets/footer-logo.png";

export default function Footer() {
	return (
		<footer>
			<div className="row">
				<div className="footer__top">
					<form className="footer__form">
						<h2 className="footer__form__title">Stay in the loop</h2>
						<p className="footer__form__para">
							Join our mailing list to receive updates on our latest feature
							releases, NFT drops, and tips and tricks for using Everest.
						</p>
						<div className="footer__form__field">
							<input
								type="text"
								placeholder="Your email address"
								className="footer__form__input"
							/>
							<button className="footer__form__button disabled" type="button">
								Sign up
							</button>
						</div>
					</form>
					<div className="footer__community">
						<h2 className="footer__community__title">Join the community</h2>
						<div className="footer__community__icons">
							<button className="footer__community__icon disabled">
								<FontAwesomeIcon icon={faDiscord} />
							</button>
							<button className="footer__community__icon disabled">
								<FontAwesomeIcon icon={faInstagram} />
							</button>
							<button className="footer__community__icon disabled">
								<FontAwesomeIcon icon={faEnvelope} />
							</button>
							<button className="footer__community__icon disabled">
								<FontAwesomeIcon icon={faYoutube} />
							</button>
							<button className="footer__community__icon disabled">
								<FontAwesomeIcon icon={faReddit} />
							</button>
							<button className="footer__community__icon disabled">
								<FontAwesomeIcon icon={faTiktok} />
							</button>
							<button className="footer__community__icon disabled">
								<FontAwesomeIcon icon={faTwitter} />
							</button>
						</div>
					</div>
				</div>
				<div className="footer__middle">
					<div className="footer__column footer__quarter">
						<img src={FooterLogo} alt="" className="footer__column__logo" />
						<h2 className="footer__column__title">Everest</h2>
						<p className="footer__column__para">
							Everest is the easiest place to buy NFTs (Non-Fungible Tokens). We
							provide everything you need to buy and sell NFTs in seconds.
						</p>
					</div>
					<div className="footer__three-quarters">
						<div className="footer__column footer__link-column">
							<h2 className="footer__link-column__title">About Us</h2>
							<a className="footer__link-column__link disabled">About</a>
							<a className="footer__link-column__link disabled">Careers</a>
							<a className="footer__link-column__link disabled">
								Announcements
							</a>
							<a className="footer__link-column__link disabled">News</a>
							<a className="footer__link-column__link disabled">Press</a>
							<a className="footer__link-column__link disabled">Legal</a>
						</div>
						<div className="footer__column footer__link-column">
							<h2 className="footer__link-column__title">Learn</h2>
							<a className="footer__link-column__link disabled">Learn & Earn</a>
							<a className="footer__link-column__link disabled">
								Ethereum Price
							</a>
							<a className="footer__link-column__link disabled">Academy</a>
							<a className="footer__link-column__link disabled">
								Live Training
							</a>
							<a className="footer__link-column__link disabled">Community</a>
							<a className="footer__link-column__link disabled">Blog</a>
						</div>
						<div className="footer__column footer__link-column">
							<h2 className="footer__link-column__title">Marketplace</h2>
							<a className="footer__link-column__link disabled">All NFTs</a>
							<a className="footer__link-column__link disabled">Art</a>
							<a className="footer__link-column__link disabled">Gaming</a>
							<a className="footer__link-column__link disabled">Music</a>
							<a className="footer__link-column__link disabled">Photography</a>
							<a className="footer__link-column__link disabled">Collectibles</a>
						</div>
						<div className="footer__column footer__link-column">
							<h2 className="footer__link-column__title">Resources</h2>
							<a className="footer__link-column__link disabled">Help Center</a>
							<a className="footer__link-column__link disabled">
								Developer Platform
							</a>
							<a className="footer__link-column__link disabled">
								Platform Status
							</a>
							<a className="footer__link-column__link disabled">Taxes</a>
							<a className="footer__link-column__link disabled">Suggestions</a>
							<a className="footer__link-column__link disabled">APIs</a>
						</div>
					</div>
				</div>
				<div className="footer__bottom">
					<span className="footer__copyright">© Copyright 2024</span>
					<div className="footer__bottom__links">
						<a className="footer__bottom__link disabled">Privacy Policy</a>
						<a className="footer__bottom__link disabled">Terms of Service</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
