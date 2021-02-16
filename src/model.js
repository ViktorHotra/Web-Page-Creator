import image from './assets/image.png';
import {
	ColumnsBlock,
	ImageBlock,
	TextBlock,
	TitleBlock,
} from './classes/blocks';

const text = `
Web Page Creator by using vanilla JS
`;

export const model = [
	new TitleBlock('Web Page Creator', {
		tag: 'h2',
		styles: {
			background: 'linear-gradient(to right, #ef32d9, #89fffd)',
			'font-family': 'Reggae One, cursive',
			'text-align': 'center',
			padding: '1.5rem',
		},
	}),
	new ImageBlock(image, {
		styles: {
			padding: '2rem 0',
			display: 'flex',
			'justify-content': 'center',
		},
		imageStyles: {
			width: '500px',
			height: 'auto',
		},
		alt: 'Это картинка',
	}),
	new ColumnsBlock(
		[
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam nostrum numquam reiciendis. Ab amet distinctio dolor illo itaque omnis repellendus rerum sed sequi, suscipit voluptate.\n',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam nostrum numquam reiciendis. Ab amet distinctio dolor illo itaque omnis repellendus rerum sed sequi, suscipit voluptate.\n',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam nostrum numquam reiciendis. Ab amet distinctio dolor illo itaque omnis repellendus rerum sed sequi, suscipit voluptate.\n',
		],
		{
			styles: {
				padding: '2rem',
				'border-top': 'solid 0.1rem #ef32d9',
				color: '#222',
				'font-weight': 'bold',
			},
		}
	),
	new TextBlock(text, {
		styles: {
			background: 'linear-gradient(to left, #ef32d9, #89fffd)',
			color: '#fff',
			'text-align': 'center',
			padding: '1rem',
			'font-weight': 'bold',
		},
	}),
];
