import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ItemSkeleton from "./ItemSkeleton";
import Skeleton from "./Skeleton";

const ItemPageSkeleton = ({ swiperSettings }) => {
	return (
		<>
			<section id="item-info">
				<div className="container">
					<div className="row item-page__row">
						<div className="item-page__left">
							<figure className="item-page__img__wrapper">
								<div className="item-page__img__details">
									<FontAwesomeIcon
										icon={faEthereum}
										className="item-page__img__icon"
									/>
									<div className="item-page__img__likes">
										<span className="item-page__img__likes__text">
											<Skeleton width="40px" height="16px" borderRadius="4px" />
										</span>
									</div>
								</div>
								<Skeleton width="100%" height="100%" />
							</figure>
						</div>
						<div className="item-page__right">
							<div className="item-page__collection light-blue">
								<Skeleton width="130px" height="16px" borderRadius="4px" />
							</div>
							<h1 className="item-page__name">
								<Skeleton width="260px" height="16px" borderRadius="4px" />
							</h1>
							<span className="item-page__owner">
								<Skeleton width="130px" height="16px" borderRadius="4px" />
							</span>
							<div className="item-page__details">
								<div className="item-page__detail">
									<span className="item-page__detail__text">
										<Skeleton width="80px" height="16px" borderRadius="4px" />
									</span>
								</div>
								<div className="item-page__detail">
									<span className="item-page__detail__text">
										<Skeleton width="80px" height="16px" borderRadius="4px" />
									</span>
								</div>
								<div className="item-page__detail">
									<span className="item-page__detail__text">
										<Skeleton width="80px" height="16px" borderRadius="4px" />
									</span>
								</div>
							</div>
							<div className="item-page__sale">
								<div className="item-page__sale__header">
									<Skeleton width="200px" height="16px" borderRadius="4px" />
								</div>
								<div className="item-page__sale__body">
									<span className="item-page__sale__label">
										<Skeleton width="80px" height="16px" borderRadius="4px" />
									</span>
									<div className="item-page__sale__price">
										<span className="item-page__sale__price__eth">
											<Skeleton
												width="130px"
												height="16px"
												borderRadius="4px"
											/>
										</span>
										<span className="item-page__sale__price__dollars">
											<Skeleton
												width="130px"
												height="16px"
												borderRadius="4px"
											/>
										</span>
									</div>
									<div className="item-page__sale__buttons">
										<Skeleton width="100%" height="50px" borderRadius="8px" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="recommended-items">
				<div className="container">
					<div className="row recommended-items__row">
						<div className="recommended-items__wrapper">
							<div className="recommended-items__header">
								<Skeleton width="230px" height="16px" borderRadius="4px" />
							</div>
							<div className="recommended-items__body">
								<Swiper {...swiperSettings} modules={[Navigation]}>
									{new Array(9).fill(0).map((_, index) => (
										<SwiperSlide key={index} className="item-column">
											<ItemSkeleton />
										</SwiperSlide>
									))}
								</Swiper>
							</div>
							<div className="recommended-items__footer">
								<div className="recommended-items__footer__button">
									<Skeleton width="100px" height="24px" borderRadius="4px" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ItemPageSkeleton;
