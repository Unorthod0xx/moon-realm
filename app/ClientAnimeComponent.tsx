'use client';

// ClientAnimeComponent.tsx
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import anime from 'animejs';

export default function ClientAnimeComponent() {
	const logoRef = useRef(null);

	useEffect(() => {

		anime({
			targets: '#lineDrawing .lines path',
			strokeDashoffset: [anime.setDashoffset, 0],
			easing: 'easeInOutSine',
			duration: 2000,
			delay: function (el, i) { return i * 10 },
			direction: 'alternate',
			loop: false
		});

		anime({
			targets: '#lineDrawing .lines path',
			fill: ['transparent', '#fff'],
			easing: 'easeInOutQuad',
			duration: 2000,
			delay: 1000,
			loop: false
		});
	}, []);

	return (
		<div>
			<h1>
				<div ref={logoRef}>
					<div id="lineDrawing">
						<svg width="125" height="101" viewBox="0 0 125 101" fill="transparent" xmlns="http://www.w3.org/2000/svg" class="lines">
							<g clip-path="url(#clip0_2_2)">
								<path d="M123.2 41.4C123.2 52.4 118.7 62.4 111.5 69.6C104.3 76.8 94.5 81.2 83.6 81.3C96.5 72.7 105 58 105 41.4C105 28.2 99.7 16.2 91 7.60001C88.8 5.40001 86.3 3.30001 83.7 1.60001C105.5 1.70001 123.2 19.5 123.2 41.4Z" fill="transparent" stroke="white" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M92.5 99.3L62.8 41.3" stroke="white" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M62.8 41.3L51.5 63.4" stroke="white" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M83.2 1.60001L62.8 41.3" stroke="white" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M62.8 41.3L42.4 1.60001" stroke="white" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M1.5 99.3V1.60001" stroke="white" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M51.5 63.4L19.8 1.6L1.5 1.5L42.4 81.2L51.5 63.4Z" fill="transparent" stroke="white" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
							</g>
							<defs>
								<clipPath id="clip0_2_2">
									<rect width="124.7" height="100.8" fill="transparent" />
								</clipPath>
							</defs>
						</svg>
					</div>
				</div>
			</h1>
		</div>
	);
}
