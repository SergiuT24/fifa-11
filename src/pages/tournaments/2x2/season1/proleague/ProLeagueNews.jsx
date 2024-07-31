import React from 'react';
import News from '../../../../../components/league/news/News';

const ProLeagueNews = () => {
	return (
		<div>
			<News
				src={'https://icdn.sempremilan.com/wp-content/uploads/2022/10/image-78.jpg'}
				title={'Chelsea и Milan демонстрируют сильные результаты, набирая максимальное количество очков. Их борьба за первое место становится все более напряженной.'}
			/>
			<News
				src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTav49h_14uGeuA5SAmdvHg7BqrupPUfKEdyQ&s'}
				title={'Manchester ведет борьбу за место в топ-4, однако им предстоит доказать свою стойкость в оставшихся матчах, чтобы гарантировать себе участие в Лиге Чемпионов.'}
			/>
			<News
				src={'https://www.arsenal.com/sites/default/files/styles/desktop_16x9/public/images/Crest1_1920x1080.jpg?auto=webp&itok=qrOoIjS7'}
				title={'Arsenal стремится закрепиться в четверке лучших команд, чтобы получить место в Лиге Чемпионов. Их ближайшие матчи будут решающими для этой амбициозной цели.'}
			/>
			<News
				src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo7W8aMgEmjG-zBZ1l0shleq4ci41tcnnk8A&s'}
				title={'Bavaria находятся на грани вылета из гонки за топовые места. Команда должна улучшить свои результаты, чтобы избежать последнего места и сохранить шансы на успешное завершение сезона.'}
			/>
		</div>
	);
}

export default ProLeagueNews;
