import React from 'react';
import News from '../../Posts/Post/LatestNews/News';

const UclNews = () => {
	return (
		<div className='latest-scores flex flex-col justify-center bg-white h-auto rounded-lg my-5'>
			<div className='title-latest-scores h-14 flex justify-center'>
				<h1 className='text-xl'>The latest news</h1>
			</div>
			<div className='flex flex-col gap-5 items-center sm:grid sm:grid-cols-4 gap-2 p-6'>
				<News
					title={'Бавария выходит в финал Лиги чемпионов, обыграв Челси'}
					src={'https://m.media-amazon.com/images/M/MV5BMWQwMWFjMmUtOWM4YS00Mjg3LWE0MmItMjhiMzAwZjU0NGQ3XkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_.jpg'}
					info={
						<div>
							<p>В полуфинале Лиги чемпионов Бавария встретилась с Челси. Первый матч, прошедший в Лондоне, завершился со счётом 2-2.</p>
							<p>Во втором матче, который проходил в Мюнхене, Бавария одержала победу со счётом 5-3, что обеспечило им место в финале турнира.</p>
							<p>Игроки обеих команд продемонстрировали высокий уровень мастерства и приверженность игре, делая каждый матч захватывающим для болельщиков.</p>
							<p>Поздравляем Баварию с выходом в финал и благодарим Челси за достойную борьбу в этом захватывающем противостоянии.</p>
						</div>
					}
				/>
				<News
					title={'Бавария выходит в полуфинал Лиги чемпионов, обыграв Лион'}
					src={'https://elcomercio.pe/resizer/Pqbr_nkT8vVNqZyMlOTYNhyVaZk=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/QHYRJWH32FCW7GZP4AGJOCUDCQ.jpg'}
					info={
						<div>
							<p>В напряжённой 1/4 финала Лиги чемпионов Бавария встретилась с Лионом. Первый матч, прошедший в Мюнхене, завершился со счётом 2-2.</p>
							<p>Во втором матче, который проходил в Лионе, Бавария одержала победу со счётом 4-3, что обеспечило им место в полуфинале турнира.</p>
							<p>Игроки обеих команд продемонстрировали высокий уровень мастерства и приверженность игре, делая каждый матч захватывающим для болельщиков.</p>
							<p>Поздравляем Баварию с выходом в полуфинал и благодарим Лион за достойную борьбу в этом захватывающем противостоянии.</p>
						</div>
					}
				/>
				<News
					title={'Манчестер Юнайтед и Манчестер Сити получают техническое поражение и вылетают из группы Лиги чемпионов'}
					src={'https://cdn.images.express.co.uk/img/dynamic/67/590x/1893676_1.jpg'}
					info={
						<div>
							<p>Манчестер Юнайтед и Манчестер Сити столкнулись с серьёзными проблемами, получив техническое поражение, что привело к их вылету из группы Лиги чемпионов.</p>
						</div>
					}
				/>
				<News
					title={'AC Milan: триумф 3:0 над Олимпик Лион на выездном поле'}
					src={'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iZ9delUHJXj8/v1/-1x-1.jpg'}
					info={
						<div>
							<p>AC Milan сотворил настоящий фурор, одержав ошеломляющую победу со счётом 3:0 над Олимпик Лион на их домашнем поле.</p>
							<p>Команда Милана показала блестящую тактику и превосходное мастерство, забив три великолепных гола, что оставило Лион без ответа.</p>
							<p>Каждая минута игры была наполнена яркими моментами, которые подарили болельщикам незабываемые впечатления.</p>
							<p>Поздравляем AC Milan с фантастической победой и выражаем благодарность обеим командам за захватывающий и напряжённый матч, который надолго останется в памяти футбольных фанатов.</p>
						</div>
					}
				/>
				<News
					title={'Олимпик Лион: триумф 2:0 над AC Milan на выездном поле'}
					src={'https://media.ol.fr/uploads/assets/184d0b1f22194926b5085d63496e7845_ashx_png_cb018eb565.png'}
					info={
						<div>
							<p>Олимпик Лион сотворил настоящий фурор, одержав уверенную победу со счётом 2:0 над AC Milan на их домашнем поле.</p>
							<p>Команда Лиона показала великолепную тактику и превосходное мастерство, забив два замечательных гола, которые оставили AC Milan без ответа.</p>
							<p>Каждая минута игры была наполнена яркими моментами, которые подарили болельщикам незабываемые впечатления.</p>
							<p>Поздравляем Олимпик Лион с фантастической победой и выражаем благодарность обеим командам за захватывающий и напряжённый матч, который надолго останется в памяти футбольных фанатов.</p>
						</div>
					}
				/>
				<News
					title={'Олимпик Лион: триумф 1:0 над Арсеналом на домашнем поле'}
					src={'https://www.arsenalpics.com/p/5/arsenal-vs-olympique-lyonnais-monreal-breaks-19199486.jpg.webp'}
					info={
						<div>
							<p>Олимпик Лион одержал значимую победу со счётом 1:0 над Арсеналом на своём домашнем поле, продемонстрировав великолепную игру и стойкость.</p>
							<p>Команда Лиона с самого начала матча показала решимость и агрессивный настрой, что привело к единственному, но решающему голу в первом тайме.</p>
							<p>Арсенал пытался ответить, создавая опасные моменты и удерживая напряжение на протяжении всего матча, однако оборона Лиона была непробиваема.</p>
							<p>Каждая минута игры была насыщена борьбой и волнующими моментами, которые держали зрителей в напряжении до самого финального свистка.</p>
							<p>Поздравляем Олимпик Лион с важной победой и выражаем благодарность обеим командам за захватывающий матч, который надолго останется в памяти футбольных фанатов.</p>
						</div>
					}
				/>
				<News
					title={'Олимпик Лион: триумф 3:2 над Арсеналом на выездном поле'}
					src={'https://www.arsenalpics.com/p/5/arsenal-vs-olympique-lyonnais-fierce-battle-28397291.jpg.webp'}
					info={
						<div>
							<p>Олимпик Лион одержал впечатляющую победу со счётом 3:2 над Арсеналом на их домашнем поле, демонстрируя превосходную тактику и мастерство.</p>
							<p>Команда Лиона начала матч активно, быстро забив первый гол, что задало тон всей игре.</p>
							<p>Арсенал ответил достойно, сумев сравнять счёт и подарив болельщикам яркий футбольный спектакль.</p>
							<p>Во втором тайме Лион продолжил атаковать и забил ещё два гола, несмотря на упорное сопротивление со стороны Арсенала, который также сумел забить, но этого было недостаточно.</p>
							<p>Каждая минута игры была наполнена захватывающими моментами, что оставило незабываемые впечатления у всех присутствующих на стадионе и зрителей перед экранами.</p>
							<p>Поздравляем Олимпик Лион с замечательной победой и выражаем благодарность обеим командам за захватывающий и напряжённый матч, который останется в памяти футбольных фанатов надолго.</p>
						</div>
					}
				/>
				<News
					title={'Манчестер Сити: триумф 2:1 над Арсеналом на выездном поле'}
					src={'https://www.arsenalpics.com/p/5/gervinho-vs-kolo-toure-intense-rivalry-etihad-5875741.jpg.webp'}
					info={
						<div>
							<p>Манчестер Сити одержал важную победу со счётом 2:1 над Арсеналом на их домашнем поле, продемонстрировав высокую степень мастерства и уверенную игру.</p>
							<p>Матч начался с оживлённой борьбы, и Арсенал первым открыл счёт, показав серьёзный настрой на победу.</p>
							<p>Однако, команда Манчестер Сити не растерялась и сумела сравнять счёт уже в середине первого тайма, воспользовавшись отличным моментом для атаки.</p>
							<p>Во втором тайме Сити продолжил давление, и их настойчивость принесла плоды - второй гол, который стал решающим и принёс им победу в этом напряжённом поединке.</p>
							<p>Болельщики обеих команд получили массу эмоций от яркой и напряжённой игры, которая держала их в напряжении до самого финального свистка.</p>
							<p>Поздравляем Манчестер Сити с победой и благодарим обе команды за потрясающий матч, который надолго останется в памяти футбольных фанатов.</p>
						</div>
					}
				/>
				<News
					title={'Манчестер Сити: триумф 2:0 над Арсеналом на домашнем поле'}
					src={'https://news.bbcimg.co.uk/media/images/50680000/jpg/_50680290_nasri466.jpg'}
					info={
						<div>
							<p>Манчестер Сити одержал уверенную победу со счётом 2:0 над Арсеналом на своём домашнем поле, продемонстрировав отличную игру и тактическую дисциплину.</p>
							<p>Первый гол был забит уже в первом тайме, когда команда Сити воспользовалась ошибкой в обороне Арсенала и провела быструю атаку, завершившуюся точным ударом в сетку.</p>
							<p>Во втором тайме Манчестер Сити продолжил доминировать на поле, что привело ко второму голу, который окончательно закрепил их преимущество в этом матче.</p>
							<p>Болельщики Сити были в восторге от великолепной игры своей команды, а Арсенал, несмотря на поражение, показал волю к борьбе и старание до самого конца.</p>
							<p>Поздравляем Манчестер Сити с заслуженной победой и благодарим обе команды за яркий и напряжённый матч, который подарил много эмоций всем любителям футбола.</p>
						</div>
					}
				/>
				<News
					title={'Челси: триумф 6:2 над Баварией на выездном поле'}
					src={'https://i.guim.co.uk/img/static/sys-images/Football/Pix/pictures/2012/5/19/1337467990783/The-Chelsea-defender-Ryan-008.jpg?width=465&dpr=1&s=none'}
					info={
						<div>
							<p>Челси сотворил настоящий фурор, одержав ошеломляющую победу со счётом 6:2 над Баварией на их домашнем поле.</p>
							<p>Команда Челси показала блестящую тактику и превосходное мастерство, забив шесть великолепных голов, что оставило Баварию без ответа.</p>
							<p>Каждая минута игры была наполнена яркими моментами, которые подарили болельщикам незабываемые впечатления.</p>
							<p>Поздравляем Челси с фантастической победой и выражаем благодарность обеим командам за захватывающий и напряжённый матч, который надолго останется в памяти футбольных фанатов.</p>
						</div>
					}
				/>
				<News
					title={'Челси: победа 5:0 над Баварией на домашнем поле'}
					src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzkMJv2zUT9aym0t9R4L0u_3NAmL60PF1tug&s'}
					info={
						<div>
							<p>Команда Челси одержала впечатляющую победу со счетом 5:0 над Баварией на домашнем матче на Станфорд Бридж.</p>
							<p>Игроки Челси продемонстрировали отличную игру, забив пять голов и не оставив шансов Баварии.</p>
							<p>Матч был полон зрелищных моментов, и болельщики наслаждались каждой минутой игры.</p>
							<p>Поздравляем Челси с убедительной победой и благодарим обе команды за интересный и напряженный матч.</p>
						</div>
					}
				/>
				<News
					title={'AC Milan: победа 3:0 над Manchester City на выездном поле'}
					src={'https://www.citytilidie.com/wp-content/uploads/2008/08/AC-Milan-friendly-2008-to-09-action-1.jpg'}
					info={
						<div>
							<p>Команда AC Milan одержала впечатляющую победу со счетом 3:0 над Manchester City на выездном матче.</p>
							<p>Игроки AC Milan продемонстрировали отличную игру, забив три гола и не оставив шансов Manchester City.</p>
							<p>Матч был полон зрелищных моментов, и болельщики наслаждались каждой минутой игры.</p>
							<p>Поздравляем AC Milan с убедительной победой и благодарим обе команды за интересный и напряженный матч.</p>
						</div>
					}
				/>
				<News
					title={'AC Milan: поражение 0:1 от Manchester City на домашнем поле'}
					src={'https://www.citytilidie.com/wp-content/uploads/2008/08/ac-milan-2008-to-09-teams-1012x1024.jpg'}
					info={
						<div>
							<p>Команда AC Milan потерпела поражение со счетом 0:1 от Manchester City в домашнем матче.</p>
							<p>Manchester City удалось забить единственный гол в матче, который и стал решающим.</p>
							<p>Обе команды показали достойную игру, но Manchester City смогли использовать свой шанс и одержали победу.</p>
							<p>Благодарим AC Milan и Manchester City за напряженную и интересную игру, а болельщиков за поддержку на стадионе.</p>
						</div>
					}
				/>
				<News
					title={'Манчестер Сити: изменения в тренерском штабе'}
					src={'https://fmmvibe.com/uploads/monthly_2024_02/Manchester-city-website.jpg.03d529a5d9ae6f72bd487acd3f332523.jpg'}
					info={
						<div>
							<p>В связи с неудачной предсезонной подготовкой и отсутствием главных тренеров команды, Manchester City приняли решение уволить тренеров Subz и ytc.</p>
							<p>На их место были приглашены новые специалисты: прошлый бомбардир чемпионата мира DartRin и тренер сборной Бразилии Jsnick.</p>
							<p>Клуб надеется, что с приходом новых тренеров команда сможет показать лучшие результаты в предстоящем ЛЧ.</p>
							<p>Болельщики с нетерпением ждут новых побед и ярких матчей под руководством DartRin и Jsnick.</p>
						</div>
					}
				/>

				<News
					title={'Челси: победа 6:2 над Манчестер Юнайтед на выездном поле'}
					src={'https://news.bbcimg.co.uk/media/images/51481000/jpg/_51481662_011419331-1.jpg'}
					info={
						<div>
							<p>Челси одержал впечатляющую победу со счетом 6:2 над Манчестер Юнайтед на выездном матче.</p>
							<p>Команда Челси продемонстрировала выдающуюся игру, забив шесть голов и оставив Манчестер Юнайтед без шансов.</p>
							<p>Матч был полон зрелищных моментов, и болельщики наслаждались каждой минутой игры.</p>
							<p>Поздравляем Челси с впечатляющей победой и благодарим обе команды за отличную игру.</p>
						</div>
					}
				/>
				<News
					title={'Челси: поражение 2:3 от Манчестер Юнайтед на домашнем поле'}
					src={'https://i.guim.co.uk/img/static/sys-images/Football/Pix/pictures/2011/4/12/1302641777188/javier-hernandez-007.jpg?width=620&quality=85&auto=format&fit=max&s=cea6f21c4e6c821e6160356b2cfabdbb'}
					info={
						<div>
							<p>Команда Челси потерпела поражение со счетом 2:3 от Манчестер Юнайтед в домашнем матче.</p>
							<p>Обе команды показали высококлассную игру, с множеством забитых голов и напряженными моментами.</p>
							<p>Игра держала зрителей в напряжении до самого конца, но Манчестер Юнайтед удалось вырвать победу.</p>
							<p>Благодарим Челси и Манчестер Юнайтед за захватывающий матч и болельщиков за поддержку на стадионе.</p>
						</div>
					}
				/>
				<News
					title={'Барселона: ничья 1:1 с Челси на домашнем поле'}
					src={'https://editorial.uefa.com/resources/0254-0d7dd1dcc49c-03379ef89f71-1000/chelsea_s_frank_lampard_consoles_lionel_messi_at_the_camp_nou.jpeg'}
					info={
						<div>
							<p>Команда Барселоны сыграла вничью с Челси со счетом 1:1 на домашнем матче в групповом этапе Лиги чемпионов.</p>
							<p>Обе команды показали яркую и динамичную игру, обменявшись голами и создав множество опасных моментов.</p>
							<p>Зрелищный матч оставил болельщиков на краю своих мест, с напряженной борьбой до финального свистка.</p>
							<p>Благодарим Барселону и Челси за великолепное выступление и болельщиков за поддержку на стадионе.</p>
						</div>
					}
				/>
				<News
					title={'Челси: ничья 0:0 с Барселоной на домашнем поле'}
					src={'https://www.aljazeera.com/wp-content/uploads/2012/04/201241820553271734_20.jpeg?resize=770%2C513&quality=80'}
					info={
						<div>
							<p>Команда Челси сыграла вничью с Барселоной со счетом 0:0 на домашнем матче в групповом этапе Лиги чемпионов.</p>
							<p>Обе команды продемонстрировали упорную защитную игру, не позволив сопернику забить ни одного гола.</p>
							<p>Матч был насыщен тактическими маневрами и напряженными моментами, но ни одной из команд не удалось прорвать оборону противника.</p>
							<p>Благодарим Челси и Барселону за захватывающий матч и болельщиков за неустанную поддержку.</p>
						</div>
					}
				/>
				<News
					title={'Бавария: ничья 2:2 с Барселоной на домашнем поле'}
					src={'https://i.ytimg.com/vi/edxN-HOlMMY/sddefault.jpg'}
					info={
						<div>
							<p>Команда Баварии сыграла вничью с Барселоной со счетом 2:2 на домашнем матче в групповом этапе Лиги чемпионов.</p>
							<p>Игроки обеих команд показали напряженную и зрелищную игру, обменявшись забитыми мячами и продемонстрировав высокое мастерство.</p>
							<p>Несмотря на итоговую ничью, матч был полон ярких моментов и оставил болельщиков довольными.</p>
							<p>Благодарим обе команды за великолепное выступление и всех болельщиков за поддержку на стадионе.</p>
						</div>
					}
				/>
				<News
					title={'Барселона: разгромная победа 5:1 над Баварией'}
					src={'https://img.fcbayern.com/image/upload/t_cms-4x3-seo/v1601384980/cms/public/images/fcbayern-com/media/images/imported/spieler_11_12_/olic/270/barca_ima_270711.524295_r.jpg'}
					info={
						<div>
							<p>Команда Барселоны одержала впечатляющую победу над Баварией со счетом 5:1 на домашнем матче в групповом этапе Лиги чемпионов.</p>
							<p>Игроки Барселоны продемонстрировали высокий уровень мастерства и командной игры, забив пять великолепных голов и показав отличную оборону.</p>
							<p>Эта победа укрепила позиции Барселоны в группе и стала ярким свидетельством их стремления к успеху в этом турнире.</p>
							<p>Поздравляем Барселону с убедительной победой и благодарим всех болельщиков за невероятную поддержку на стадионе.</p>
						</div>
					}
				/>

				<News
					title={'AC Milan: разгромная победа 4:0 над Arsenal на выезде'}
					src={'https://editorial.uefa.com/resources/025a-0ea6adf5cc56-961d57d57e05-1000/1753317.jpeg'}
					info={
						<div>
							<p>Команда AC Milan одержала впечатляющую победу над Arsenal со счетом 4:0 на выездном матче.</p>
							<p>Игроки AC Milan продемонстрировали превосходную игру, доминируя на поле и забивая гол за голом.</p>
							<p>Эта победа стала результатом слаженной работы всей команды и безупречной тактики тренерского штаба.</p>
							<p>Поздравляем AC Milan с великолепным результатом и благодарим болельщиков за поддержку даже на выезде.</p>
						</div>
					}
				/>
				<News
					title={'AC Milan: победа 3:0 над Arsenal'}
					src={'https://img.bleacherreport.net/img/images/photos/001/598/986/139056205_crop_north.jpg?1331046425&w=3072&h=2048'}
					info={
						<div>
							<p>Команда AC Milan одержала убедительную победу над Arsenal с разгромным счетом 3:0 в недавнем матче.</p>
							<p>Игроки AC Milan продемонстрировали отличное владение мячом и тактическую выучку, что привело к трем забитым голам и уверенной победе.</p>
							<p>Каждый из забитых голов был результатом слаженной командной работы и мастерства игроков.</p>
							<p>Поздравляем AC Milan с заслуженной победой и благодарим болельщиков за поддержку.</p>
						</div>
					}
				/>
			</div>
		</div>
	);
}

export default UclNews;
