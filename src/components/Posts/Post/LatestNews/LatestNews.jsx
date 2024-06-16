import React from 'react';
import News from './News';

const LatestNews = () => {
	return (
		<div className='latest-scores w-10/12 bg-white h-auto rounded-lg p-5 flex flex-col gap-2'>
			<div className='title-latest-scores h-14 flex items-center '>
				<h1 className=' text-xl'>The latest news</h1>
			</div>
			<News
				title={'Anna признана лучшим игроком турнира!'}
				src={'https://dohanews.co/wp-content/uploads/2022/10/FfGVvv8XkAEje_P-e1665925689242.jpeg'}
				info={
					<div>
						<p>По итогам чемпионата мира FIFA 11 звание лучшего игрока турнира заслуженно получает Anna, которая продемонстрировала великолепное мастерство и вклад в командные успехи на протяжении всего турнира.</p>
						<p>Anna заняла второе место по количеству забитых голов, записав на свой счет 11 голов. Но, помимо этого, она стала лучшим игроком по количеству голевых передач, сделав впечатляющие 13 асистов. Эти выдающиеся показатели позволили Anna набрать 24 очка по системе "гол + пас", что ставит ее на первое место среди всех участников турнира.</p>
						<p>DartRin, в свою очередь, занял первое место по количеству забитых голов с 13 мячами и сделал 9 результативных передач, набрав в общей сложности 22 очка по системе "гол + пас". Несмотря на впечатляющую результативность DartRin, именно совокупный вклад Anna в виде голов и асистов обеспечил ей звание лучшего игрока турнира.</p>
						<p>Anna продемонстрировала не только свои бомбардирские способности, но и умение создавать голевые моменты для партнеров по команде, что сделало ее незаменимым игроком на поле. Ее вклад был ключевым в достижении командных успехов и высоких результатов на турнире.</p>
						<p>Поздравляем Anna с заслуженным признанием и благодарим всех участников турнира за незабываемые моменты и красивую игру. Турнир FIFA 11 подарил нам множество ярких эмоций и незабываемых матчей, и мы с нетерпением ждем новых футбольных баталий.</p>
					</div>
				}
			/>
			<News
				title={'Испания завоевала Кубок чемпионов мира FIFA 11, победив Португалию!'}
				src={'https://img.championat.com/s/732x488/news/big/p/i/127888867762261571302.jpg'}
				info={
					<div>
						<p>Сборная Испании триумфально завоевала Кубок чемпионов мира FIFA 11, одержав победы над сборной Португалии в финальных матчах.</p>
						<p>Первый матч финала, проходивший на домашнем стадионе Испании, завершился минимальной победой хозяев со счетом 1:0. Испанская команда продемонстрировала слаженную игру и надежную оборону, что позволило им удержать преимущество до конца матча.</p>
						<p>Во втором матче, состоявшемся на домашнем стадионе Португалии, испанская сборная вновь показала свою силу, победив со счетом 3:0. Португальская команда не смогла противопоставить ничего мощной атаке испанцев, что обеспечило Испании убедительную победу в финале.</p>
						<p>Эти две победы принесли сборной Испании заслуженный Кубок чемпионов мира FIFA 11. Испанская команда продемонстрировала высокий уровень игры на протяжении всего турнира и заслуженно получила главный трофей. Болельщики Испании ликуют, празднуя историческую победу своей сборной.</p>
					</div>
				}
			/>
			<News
				title={'Испания триумфально выходит в финал, обыграв Германию!'}
				src={'https://football-pitch.ru/wp-content/uploads/2018/03/fernando-torres-1-870x400.jpg'}
				info={
					<div>
						<p>Сборная Испании вышла в финал, одержав уверенные победы над сборной Германии в двух матчах.</p>
						<p>Первый матч, проходивший на домашнем стадионе Испании, завершился впечатляющей победой хозяев со счетом 5:1. Испанская команда продемонстрировала великолепное владение мячом и атакующую мощь, не оставив немецким игрокам шансов на успех.</p>
						<p>Во втором матче, который состоялся на домашнем стадионе Германии, испанская сборная снова показала превосходство, победив со счетом 4:1. Немецкая команда сумела забить один гол, но этого оказалось недостаточно, чтобы изменить исход противостояния.</p>
						<p>Две убедительные победы Испании над Германией обеспечили ей выход в финал. Испанская команда доказала свою силу и готовность к борьбе за главный трофей. Болельщики с нетерпением ждут финального матча, надеясь на продолжение победной серии.</p>
					</div>
				}
			/>
			<News
				title={'Португалия одержала две победы над Бразилией и выходит в финал!'}
				src={'http://www.footballtop.ru/sites/default/files/photos/news/620188-10141758-640-360.jpg'}
				info={
					<div>
						<p>Сборная Португалии продемонстрировала высокий уровень игры, одержав две победы над сборной Бразилии в напряженных матчах.</p>
						<p>Первый матч, проходивший на домашнем стадионе Португалии, завершился со счетом 2:0 в пользу хозяев. Португальская команда показала отличную атакующую игру и надежную оборону, не оставив бразильцам шансов на гол.</p>
						<p>Во втором матче, состоявшемся на домашнем стадионе Бразилии, Португалия снова оказалась сильнее, победив со счетом 2:1. Единственный гол Бразилии был забит с пенальти, что не позволило им избежать поражения.</p>
						<p>Обе встречи показали, что португальская команда обладает мощным потенциалом и может успешно конкурировать с сильнейшими командами мира. Успехи в этих матчах дают болельщикам надежду на дальнейшие победы в предстояшим финале.</p>
					</div>
				}
			/>
			<News
				title={'Англия и Германия в четвертьфинале: у Англии новые игроки!'}
				src={'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Deutsche_Fu%C3%9Fballnationalmannschaft_2011-06-03_%2801%29.jpg/800px-Deutsche_Fu%C3%9Fballnationalmannschaft_2011-06-03_%2801%29.jpg'}
				info={
					<div>
						<p>Сборная Англии вышла в четвертьфинал под руководством новых игроков Wenger и SergeyFace, продемонстрировав стойкость и командный дух в серии матчей против сборной Германии.</p>
						<p>Первый матч проходил на домашнем стадионе Германии и завершился вничью 1:1. Английская команда показала умение держать оборону и организовывать атаки, несмотря на давление со стороны соперника. Немецкая сборная, в свою очередь, также продемонстрировала высокий уровень игры, что привело к равному результату.</p>
						<p>Во втором матче, который состоялся на домашнем стадионе Англии, немецкая команда одержала победу со счетом 4:2. Несмотря на старания и два забитых мяча англичан, Германия оказалась сильнее, забив четыре гола и обеспечив себе выход в следующий этап.</p>
						<p>Игроки Wenger и SergeyFace продолжают работать над улучшением игры и стратегий, анализируя прошедшие матчи и готовясь к будущим соревнованиям. Несмотря на поражение, команда показала себя с лучшей стороны и сохраняет оптимизм перед следующими вызовами.</p>
					</div>
				}
			/>
			<News
				title={'В четвертьфинале Бразилия разгромила Францию со счетом 4:0, игрок Perfect отметился хет-триком!'}
				src={'http://news.bbcimg.co.uk/media/images/51861000/jpg/_51861700_4594958.jpg'}
				info={
					<div>
						<p>В захватывающем матче, состоявшемся на родной арене бразильцев, хозяева поля одержали убедительную победу над сборной Франции со счетом 4:0. Главным героем встречи стал игрок с ником Perfect, который оформил хет-трик, забив три гола в ворота французов.</p>
						<p>Бразилия уверенно контролировала ход игры с самого начала матча, демонстрируя великолепную командную работу и точные передачи. Французы, несмотря на все усилия, не смогли найти путь к воротам соперника и показать свою лучшую игру.</p>
						<p>Во втором матче, который прошел во Франции, хозяева поля смогли одержать минимальную победу со счетом 1:0, однако этого оказалось недостаточно, чтобы компенсировать крупное поражение в первом поединке. Таким образом, бразильская команда празднует триумф, а французы, несмотря на великолепные усилия бомбардира турнира NSKRaven, вынуждены уйти без кубка.</p>
						<p>Этот матч стал ярким примером превосходства бразильской футбольной школы и продемонстрировал, что игроки могут показать высший класс в самых ответственных встречах.</p>
					</div>
				}
			/>
		</div>
	);
}

export default LatestNews;
