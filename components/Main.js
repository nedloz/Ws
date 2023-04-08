import { View, Text, TextInput, FlatList, Image, ScrollView, Pressable, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import { Svg, Path, } from "react-native-svg";
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from "react";
import Menu from "./Menu";

const DATA = [
  {
    "id": 2,
    "name": "Чек-ап для мужчин",
    "description": "9 исследований",
    "price": "8000",
    "image": "https://medic.madskill.ru/filemanager/uploads/thinking_man_PNG11598.png"
  },
  {
    "id": 3,
    "name": "Результаты ПЦР-теста на COVID-19 за 3 часа",
    "description": "Теперь результат ПЦР-теста на COVID-19 можно получить уже через 3 часа!",
    "price": "1400",
    "image": "https://medic.madskill.ru/filemanager/uploads/pngwing.com (4).png"
  },
  {
    "id": 4,
    "name": "Биохимический анализ крови",
    "description": "До 30 ноября выполните комплекс исследований со скидкой 15%",
    "price": "2300",
    "image": "https://medic.madskill.ru/filemanager/uploads/pngwing.com (2).png"
  },
  {
    "id": 5,
    "name": "Для людей с большим сердцем",
    "description": "+300 бонусных рублей по нашей программе лояльности «Здоровый кэшбэк» всем, кто сдаст кровь на типирование",
    "price": "1",
    "image": "https://medic.madskill.ru/filemanager/uploads/pngwing.com (5).png"
  },]

const CATALOG = [
  {
    "id": 1,
    "name": "ПЦР-тест на определение РНК коронавирусв стандартный",
    "description": "Клинический анализ крови – это самое важное комплексное лабораторное исследование при обследовании человека с любым заболеванием. Изменение исследуемых показателей, как правило, происходит задолго до появления видимых симптомов болезни.",
    "price": "1800",
    "category": "Популярные",
    "time_result": "2 дня",
    "preparation": "Кровь следует сдавать утром натощак, днем или вечером – через 4-5 часов после последнего приема пищи. За 1–2 дня до исследования необходимо исключить из рациона продукты с высоким содержанием жиров и алкоголь.",
    "bio": "Слизистая"
  },
  {
    "id": 3,
    "name": "Гликированный гемоглобин (HbA1С, Glycated Hemoglobin)",
    "description": "Оценку содержания гликированного гемолобина в цельной крови используют для долгосрочного контроля уровня глюкозы в крови, при диагностике сахарного диабета, выявлении риска развития диабета.",
    "price": "1070",
    "category": "Популярные",
    "time_result": "1 день",
    "preparation": "Взятие крови предпочтительно проводить натощак. Исследование нецелесообразно проводить после кровотечений, гемотрансфузий.",
    "bio": "Цельная кровь (с ЭДТА)"
  },
  {
    "id": 2,
    "name": "Экспресс-тест, ПЦР, РНК вируса SARS-CoV-2, мазок (PCR Rapid test, SARS-CoV-2, RNA, nasopharyngeal and oropharyngeal smear)",
    "description": "Тест проводят с целью определения наличия РНК коронавируса SARS-CoV-2 в мазке со слизистой носа, носоглотки и ротоглотки методом ПЦР с детекцией в режиме реального времени (RT-PCR).",
    "price": "4085",
    "category": "Популярные",
    "time_result": "1 день",
    "preparation": "Взятие биологического материала рекомендуется проводить до начала приема лекарственных препаратов.   При подготовке пациента к взятию биоматериала следует учесть: за шесть часов до исследования не рекомендуется использовать лекарственные средства для орошения ротоглотки и препараты для рассасывания; перед взятием биологического материала, за 3-4 часа не рекомендуется использовать жевательную резинку/пастилки для освежения дыхания, принимать  пищу, чистить зубы, курить; если полость носа заполнена слизью, перед процедурой рекомендуется провести высмаркивание.",
    "bio": "Мазок со слизистой носа, носоглотки и/или ротоглотки"
  },
  {
    "id": 4,
    "name": "Тироксин общий (Т4 общий, тетрайодтиронин общий, Total Thyroxine, TT4)",
    "description": "Отражает общее содержание гормона тироксина в крови – суммарный уровень свободной и связанной с белками фракциями.",
    "price": "925",
    "category": "Популярные",
    "time_result": "2 дня",
    "preparation": "Взятие крови предпочтительно проводить утром натощак, после 8-14-часового периода ночного голодания (воду пить можно), допустимо в дневное время, выдержав 4 часа от последнего приема пищи.",
    "bio": "Сыворотка крови"
  },
  {
    "id": 5,
    "name": "ПЦР-тест на коронавирус SARS-CoV-2, мазок (PCR, Coronavirus SARS-CoV-2, nasopharyngeal and oropharyngeal smear)",
    "description": "Определение РНК вируса SARS-CoV-2 (все виды известных штаммов, включая Дельта, Омикрон и его вариант «Стелс-омикрон»)",
    "price": "2540",
    "category": "COVID",
    "time_result": "1 день",
    "preparation": "Взятие биологического материала рекомендуется проводить до начала приема лекарственных препаратов.   При подготовке пациента к взятию биоматериала следует учесть:   за шесть часов до исследования не рекомендуется использовать лекарственные средства для орошения ротоглотки и препараты для рассасывания;  перед взятием биологического материала, за 3-4 часа не рекомендуется использовать жевательную резинку/пастилки для освежения дыхания, принимать пищу, чистить зубы, курить; если полость носа заполнена слизью, перед процедурой рекомендуется провести высмаркивание.",
    "bio": "Мазок со слизистой носоглотки и/или ротоглотки"
  },
  {
    "id": 6,
    "name": "ПЦР-тест на РНК коронавируса SARS-CoV-2, включая определение штаммов Омикрон и Дельта, в мазке со слизистой носоглотки и ротоглотки",
    "description": "SARS-CoV-2 относится к большому семейству РНК-содержащих вирусов – коронавирусов (лат. Coronaviridae), вызывающих респираторные заболевания. В настоящее время известно о циркуляции среди населения четырех видов коронавирусов (HCoV-229E, -OC43, -NL63 и -HKU1), которые круглогодично присутствуют в структуре ОРВИ и, как правило, вызывают поражение верхних дыхательных путей легкой и средней тяжести. К семейству коронавирусов также относятся опасные вирусы SARS-CoV и MERS-CoV, вызывающие тяжелый острый респираторный синдром и ближневосточный респираторный синдром, соответственно.",
    "price": "2640",
    "category": "COVID",
    "time_result": "1 день",
    "preparation": "Взятие биологического материала рекомендуется проводить до начала приема лекарственных препаратов.  При подготовке пациента к взятию биоматериала следует учесть: за час до исследования не рекомендуется использовать лекарственные средства для орошения ротоглотки и препараты для рассасывания; непосредственно перед взятием биологического материала не рекомендуется использовать жевательную резинку/пастилки для освежения дыхания; если полость носа заполнена слизью, перед процедурой рекомендуется провести высмаркивание. Желательно соблюдать все описанные условия, если лечащим врачом не рекомендовано иное.",
    "bio": "Мазок со слизистой носоглотки и/или ротоглотки"
  },
  {
    "id": 7,
    "name": "Антитела, количественные, к спайковому (S) белку (RBD) SARS-CoV-2, IgG (Anti-SARS-CoV-2, spike (S) protein (RBD), IgG, quantitative)",
    "description": "Присутствие специфических антител к вирусу SARS-CoV-2 класса G указывает на факт недавнего или прошлого взаимодействия с вирусом. Поэтому такие тесты используют в комплексной диагностике при наличии подозрений на инфекцию новым коронавирусом или ее осложнения. Основной метод лабораторного подтверждения острой инфекции COVID-19 – выявление методами полимеразной цепной реакции (ПЦР) РНК вируса в биоматериале, взятом из дыхательных путей, обычно в мазке из носоглотки и ротоглотки.",
    "price": "1740",
    "category": "COVID",
    "time_result": "2 дня",
    "preparation": "Специальной подготовки не требуется.",
    "bio": "Сыворотка крови"
  },
  {
    "id": 8,
    "name": "Поствакцинальные (ЭпиВакКорона, Вектор) антитела к SARS-CoV-2 (N-, S-белки), SARS-CoV-2-IgG-Вектор",
    "description": "Качественное определение поствакцинальных (ЭпиВакКорона, Вектор) антител к SARS-CoV-2 в сыворотке крови позволяет оценить наличие иммунного ответа на вакцину ЭпиВакКорона (Вектор).",
    "price": "2540",
    "category": "COVID",
    "time_result": "1 день",
    "preparation": "Взятие крови предпочтительно проводить утром натощак, после 8-14 часов ночного периода голодания (воду пить можно), допустимо днем через 4 часа после легкого приема пищи. Исследование целесообразно проводить не ранее чем через две недели после второй вакцинации.",
    "bio": "Сыворотка крови"
  },
  {
    "id": 9,
    "name": "Анализ перестроек гена BCL- 6 (der(3)(q27)) (FISH, колич.) Analysis of BCL- 6 gene rearrangements (der(3)(q27) (FISH, quantitative)",
    "description": "Согласно современным представлениям, опирающимся на результаты исследования профиля экспрессии генов, существует несколько подтипов диффузной B-крупноклеточной лимфомы (ДBКЛ): из В-клеток герминативного центра и из активированных В-клеток. Ген BCL6 (находиться в длинном плече 3 хромосомы в районе 27) является одним из ключевых регуляторов развития В-лимфоцитов на уровне герминальной (фолликулярной) дифференцировки.",
    "price": "11195",
    "category": "Онкогенетические",
    "time_result": "7 рабочих дней",
    "preparation": "Специальной подготовки не требуется.",
    "bio": "Цельная кровь"
  },
  {
    "id": 10,
    "name": "Профиль Гиперэозинофильный синдром",
    "description": "Цитогенетическое исследование клеток костного мозга (кариотипирование) – это микроскопический анализ хромосом, который проводится для определения кариотипа, выявления численных и структурных нарушений в структуре хромосом, а также подтверждения онкологического заболевания.",
    "price": "34250",
    "category": "Онкогенетические",
    "time_result": "7 рабочих дней",
    "preparation": "Стернальная пункция (выполняет врач-гематолог). Рекомендуемый объем костного мозга - 3-4 мл, число миелокариоцитов (МКЦ) – не менее 7 х 109/л.",
    "bio": "Костный мозг"
  },
  {
    "id": 11,
    "name": "Профиль Фолликулярная лимфома",
    "description": "Цитогенетический анализ клеток периферической крови в онкогематологии широко применяется для диагностики главным образом хронического лимфоцитарного лейкоза (ХЛЛ) и неходжкинскихлимфом (НХЛ).",
    "price": "26310",
    "category": "Онкогенетические",
    "time_result": "23 рабочих дня",
    "preparation": "Специальной подготовки не требуется.",
    "bio": "Цельная кровь"
  },
  {
    "id": 12,
    "name": "Профиль МАЛТ-лимфома",
    "description": "Одним из основных методов, позволяющих определить прогностические особенности заболевания у больных хроническим лимфолейкозом, другими лимфопролиферативными заболеваниями и множественной миеломой, является метод FISH, позволяющий выявлять хромосомные аномалии в интерфазных ядрах.",
    "price": "35575",
    "category": "Онкогенетические",
    "time_result": "9 рабочих дней",
    "preparation": "Специальной подготовки не требуется.",
    "bio": "Цельная кровь"
  },
  {
    "id": 13,
    "name": "Вегетарианцы (Перекресток)",
    "description": "Разработанный специально для вегетарианцев комплекс анализов поможет оценить питание с точки зрения полноценности и достаточности.",
    "price": "2685",
    "category": "ЗОЖ",
    "time_result": "1 день",
    "preparation": "Специальной подготовки не требуется.",
    "bio": "Цельная кровь"
  },
  {
    "id": 14,
    "name": "Микро- и макроэлементы (Перекресток)",
    "description": "Комплексное исследование позволит оценить статус минеральных веществ в организме, провести мероприятия по коррекции витаминной недостаточности и подобрать адекватную диету.",
    "price": "2680",
    "category": "ЗОЖ",
    "time_result": "6 рабочих дней",
    "preparation": "Специальной подготовки не требуется.",
    "bio": "Сыворотка крови"
  },
  {
    "id": 15,
    "name": "Правильное питание (Перекресток)",
    "description": "Комплексное исследование позволит оценить обмен белков, жиров и углеводов; статус витамина D в организме и основные параметры кальций-фосфорного обмена, провести мероприятия по коррекции витаминной и минеральной недостаточности и, при необходимости, подобрать адекватную диету.",
    "price": "5335",
    "category": "ЗОЖ",
    "time_result": "1 день",
    "preparation": "Специальной подготовки не требуется.",
    "bio": "Цельная кровь"
  },
  {
    "id": 16,
    "name": "Витамин D и минеральный обмен (Перекресток)",
    "description": "Комплексное исследование позволит оценить статус витамина D в организме и основные параметры кальций-фосфорного обмена, провести мероприятия по коррекции витаминной недостаточности и подобрать адекватную диету. Профиль дополнен определением магния для исключения состояний, связанных с дефицитом данного микроэлемента.",
    "price": "3360",
    "category": "ЗОЖ",
    "time_result": "1 день",
    "preparation": "Специальной подготовки не требуется.",
    "bio": "Сыворотка крови"
  }
]


const renderNews = ({ item }) => {
  return (
    <LinearGradient style={{
      borderRadius: 12,
      width: 270,
      height: 152,
      padding: 16,
      marginRight: 16,
      position: 'relative',
      marginBottom: 0

    }}
      colors={['#CDE3FF', '#76B3FF',]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <Text style={{
        fontSize: 20,
        fontWeight: 800,
        color: '#fff',
        width: 176,
        marginBottom: 20,
        lineHeight: 28,
        zIndex: 3,
      }} >{item['name'].length > 19 ? item['name'].slice(0, 19) + '...' : item['name']}</Text>
      <Text style={{
        color: '#fff',
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 20,
        zIndex: 3,
      }}
      >{item['description'].length > 20 ? item['description'].slice(0, 19) + '...' : item['description']}</Text>

      <Text
        style={{
          fontSize: 20,
          fontWeight: 800,
          color: '#fff',
          lineHeight: 28,
        }} >{item['price']} ₽</Text>
      {/* <Image
        source={{ uri: item['image'] }}
        style={{
          width: '50%',
          height: 152,

          position: 'absolute',
          bottom: -20,
          right: -10,
          zIndex: 1,
          resizeMode: 'contain',

        }}
      /> */}

    </LinearGradient>
  )
}

const renderCatalogItem = (item) => {
  return (
    <View key={item.id}
      style={{
        backgroundColor: '#ffff',
        borderColor: '#F4F4F4',
        borderWidth: 1,
        width: 355,
        height: 136,
        borderRadius: 12,
        marginBottom: 16,
        padding: 16,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: 500,
          lineHeight: 20
        }}
      >{item.name.length > 64 ? item.name.slice(0, 61) + '...' : item.name}</Text>
      <View
        style={{
          marginTop: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <View >
          <Text
            style={{
              fontSize: 14,
              fontWeight: 600,
              lineHeight: 20,
              color: '#939396',
            }} >{item.time_result}</Text>
          <Text
            style={{
              marginTop: 4,
              fontWeight: 600,
              fontSize: 17,
              lineHeight: 20,
            }}
          >{item.price} ₽</Text>
        </View>
        <TouchableOpacity
          style={{
            width: 96,
            height: 40,
            borderRadius: 10,
            backgroundColor: '#1A6FEE',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontSize: 14,
              fontWeight: 600,
              lineHeight: 20,
            }}
          >Добавить</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const renderCatalogPickButton = ({ item }) => {

  return (
    <Pressable
      style={styles.categoryBox}
      onPress={() => {
        setCatalog(CATALOG.filter(item => item.category === item))
      }}
    >
      <Text
        style={styles.categoryText} >{item}</Text>
    </Pressable>
  )
}

export default function Main() {
  const [catalog, setCatalog] = useState(CATALOG.filter(item => item.category === 'Популярные'))
  const categoryes = Array.from(new Set(CATALOG.map(item => item.category)))

  return (
    <View >
      <View // поиск
        style={{
          marginTop: 18,
          flexDirection: "row",
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: '#F5F5F9',
          borderColor: '#EBEBEB',
          borderRadius: 10,
          borderWidth: 1,
          marginHorizontal: 20,
          height: 48,
          paddingLeft: 16.5,

        }} >
        <View // картинка лупы
          style={{
            padding: 0,
            margin: 0,
            marginRight: 8,
          }}

        >
          <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#7E7E9A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            <Path d="M17.5 17.5L13.875 13.875" stroke="#7E7E9A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          </Svg>
        </View>
        <TextInput placeholder="Искать анализы" // строка поиска
          style={{
            padding: 0,
            margin: 0,
            fontSize: 16,
            lineHeight: 20,
          }}
        />
      </View>
      <ScrollView  >
        <View >

          {/* титл новостей  */}
          <Text
            style={{
              marginLeft: 20,
              fontWeight: 600,
              fontSize: 17,
              lineHeight: 24,
              color: '#939396',
              marginTop: 32,
              marginBottom: 16,
            }}
          >Акции и новости</Text>

          {/* новости и акции  */}
          <View style={{
            height: 152,
          }} >
            <FlatList renderItem={renderNews}
              data={DATA}
              style={{
                marginLeft: 20,
                height: 104,
              }}
              horizontal
            />
          </View>

          {/* титл каталога */}
          <Text style={{
            marginTop: 32,
            fontWeight: 600,
            fontSize: 17,
            lineHeight: 24,
            color: '#939396',
            marginBottom: 16,
            marginLeft: 20,
          }} >Каталог анализов</Text>

          {/* кнопки каталога */}
          <View style={{ height: 48, marginLeft: 20, }} >
            <FlatList
              renderItem={renderCatalogPickButton}
              data={categoryes}
              horizontal />
          </View>

        </View>
        <View style={{  // каталог
          alignSelf: 'center',
          marginTop: 24,
        }}
        >
          {catalog.map(item => renderCatalogItem(item))}
        </View>  
      </ScrollView>





      {/* <FlatList style={{  // каталог
        alignSelf: 'center',
        marginTop: 24,
      }}
        renderItem={renderCatalogItem}
        data={catalog} /> */}
      <Menu />

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  categoryBox: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: '#F5F5F9',
    marginRight: 16,
    borderRadius: 10,

  },
  categoryText: {
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 20,
    color: '#7E7E9A'
  },
  activeCategoryBox: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: '#1A6FEE',
    marginRight: 16,
    borderRadius: 10,
  },
  activeCategoryText: {
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 20,
    color: '#fff'
  },

})