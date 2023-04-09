import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/data-context';
import { HashLink } from 'react-router-hash-link';
import Button from '../button/button';
import styled from 'styled-components';

const Blog = () => {
	const { data } = useContext(DataContext);
	const [blogData, setBlogData] = useState(null);

	useEffect(() => {
		if (data) {
			setBlogData({ ...data.portfolio });
		}
	}, [data]);

	return (
		<BlogWrapper id='blog'>
			{blogData && (
				<div className='portfolio-inner'>
					<div className='blog-top'>
						<h1>{blogData.title}</h1>
						<p>{blogData.description}</p>
					</div>
					<div className='blog-body'>
						{blogData.items.map((el, i) => {
							const {
								buttonLabel,
								buttonUrl,
								description,
								image,
								title,
							} = el;
							return (
								<div className='row' key={i}>
									<div
										className={`${
											i % 2 === 0
												? 'col left text'
												: 'col right text'
										}`}
									>
										<h2>{title}</h2>
										<div className='blue-line'></div>
										<p>{description}</p>
										<div className='btn-wrapper'>
											<HashLink to={buttonUrl}>
												<Button bgColor='lightBlue'>
													{buttonLabel}
												</Button>
											</HashLink>
										</div>
									</div>
									<div
										className={`${
											i % 2 === 0
												? 'col right'
												: 'col left'
										}`}
									>
										<div className='img-wrapper'>
											<img
												src={image}
												alt='portfolio__image'
											/>
										</div>
									</div>
								</div>
							);
						})}
					</div>
					<div className='blog-end'></div>
				</div>
			)}
		</BlogWrapper>
	);
};

const BlogWrapper = styled.div`
	margin-top: 9.6rem;
	display: flex;
	justify-content: center;

	.portfolio-inner {
		padding: 0 2rem;
		max-width: var(--max-width-desktop);
		flex: 1;
		display: flex;
		flex-direction: column;

		.blog-top {
			display: flex;
			align-items: center;
			flex-direction: column;

			h1 {
				font-weight: 700;
				font-size: 3.8rem;
				line-height: 4.2rem;
				margin-bottom: 3.2rem;
			}

			p {
				max-width: 70%;
				text-align: center;
				margin-bottom: 6.4rem;
			}
		}

		.blog-body {
			display: flex;
			flex-direction: column;

			h2,
			p {
				margin-bottom: 1.6rem;
			}

			.row {
				display: flex;
			}

			.col {
				display: flex;
				flex-direction: column;
			}

			.col.left {
				order: 1;
				flex: 1;
			}

			.col.right {
				order: 2;
				flex: 1;
			}

			.col.left.text {
				justify-content: center;
				align-items: flex-end;
				flex: 1;

				p {
					text-align: right;
				}

				h2,
				p,
				a,
				.blue-line {
					margin-right: 12rem;
				}
			}

			.col.right.text {
				justify-content: center;
				align-items: flex-start;
				flex: 1;

				p {
					text-align: left;
				}

				h2,
				p,
				a,
				.blue-line {
					margin-left: 12rem;
				}
			}

			.blue-line {
				position: relative;
				border-bottom: 2px solid var(--light-blue);
				width: 100%;
				max-width: 33rem;
				margin-bottom: 3.2rem;
			}

			.img-wrapper {
				img {
					width: 100%;
					height: auto;
				}
			}
		}

		.blog-end {
			border-bottom: 2px solid var(--light-blue);
			width: 100%;
			max-width: 33rem;
			margin: 0 auto;
		}
	}
`;

export default Blog;
