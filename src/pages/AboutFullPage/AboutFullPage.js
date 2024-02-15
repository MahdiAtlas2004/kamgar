import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Header from "../../components/Header/Header";

const AboutFullPage = () => {
  return (
    <div>
      <Header />

      <Container style={{marginTop: "10vh"}}>
        <Row>
          <Col lg={12} className="text-center">
            <h1 className="fs-1 fw-bold myHeader">بیوگرافی</h1>
            <div className="heading-line"></div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col lg={12}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-image"
                  src="./assets/images/1.jpg"
                  alt="First-slide"
                  style={{height: "500px"}}
                />
                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-image"
                  src="./assets/images/2.jpg"
                  alt="Second-slide"
                  style={{height: "500px"}}
                />

                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-image"
                  src="./assets/images/carousel-image.jpeg"
                  alt="Third-slide"
                  style={{height: "500px"}}
                />

                <Carousel.Caption>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row className="gy-4 mt-2">
          <Col lg={12} dir="rtl">
            <h2 className="fw-bold kam-name" data-aos="zoom-in">
              حمیدالله کامگار
            </h2>
            <p dir="rtl" className="paragraph">
              تاریخ‌نگار، مقاله‌نویس، شاعر و پژوهش‌گرِ معاصر هرات؛ حمیدالله
              ‌کام‌گار در ۱۳۶۵ خورشیدی در شهرستان غوریان استان هرات متولد شد.
              سند بکلوریا را در سال ۱۳۸۵ خورشیدی از دبیرستان وزیریارمحمدخان
              غوریان به دست آورد، متعاقباً مؤفق شد از رشتۀ انجنیری برق در سال
              1396 خورشیدی هرات فارغ گردد. در بهار ۱۳۸۶ خورشیدی به ادارۀ برق
              غوریان شامل، و در سال ۱۳۸۹ خورشیدی به سب‌استیشن غوریان تبدیل، و در
              یک امتحان آزاد و رقابتی به عنوان سرشیفت این سب استیشن تعیین، و تا
              اکنون در این پست ایفای وظیفه می¬کند. وی به‌خاطر داشتن مهارت در بخش
              انجنیری برق قدرت مدتی نیز به¬طور خدمتی در سب استیشن برق قلعه¬نو،
              مرکز استان بادغیس افغانستان انجام وظیفه نموده است. کام‌گار در
              ادارۀ مورد نظر ضمن ایفای وظیفۀ اصلی‌اش به مطالعه، تحقیق و
              پژوهش¬های تاریخی پرداخته، و کارهای تاریخی و پژوهشی ارزشمند و
              ماندگاری را در زمینۀ هرات‌شناسی و خراسان تاریخی خلق کرده است.
            </p>
            <p dir="rtl" className="paragraph">
              کام‌گار تاریخ‌نگار و محققی است جوان که ادامۀ راه شادروانان؛ استاد
              فکری سلجوقی، مایل هروی، محمد علم غواص، محمد محسن صابر هروی، مسعود
              رجایی و دیگر پژوهش‌گران معاصر هرات را دنبال نموده، سختی‌ها را با
              جان و دل پذیرفته، رنج سفر را تحمل کرده، از سفرۀ همسر و دخترانش جدا
              کرده تا سرانجام گوشه‌های تاریک از تاریخ درخشان هرات را روشنایی
              اندازد، تا هویت فرهنگی و ناشناختۀ این مرز و بوم را به نسل جوان و
              آیندۀ این دیار بشناساند.
            </p>
            <p dir="rtl" className="paragraph">
              فعالیت‌هایش بی‌شمارند و نخستین گام¬هایش را روی راه¬اندازی، چاپ و
              نشر ماه‏نامه¬ای در غوریان تمرکز داد که در حقیقت نخستین ماه‌نامه در
              غوریان گفته می‌شود. این ماه‌نامه در سال 1392 خورشیدی در غوریان
              راه‌اندازی شد. ماه‌نامۀ اتفاق با پوستر رنگی در زمینه‌های فرهنگی،
              هنری، تاریخی و اجتماعی فعالیت داشت. ماه‌نامۀ اتفاق زیر نظر یک تیم
              و هیئت علمی کاربلد به‌طور منظم چاپ و به دسترس عموم قرار می‌گرفت.
              در کنار آن؛ با نشریات آوای زن، صدای جوان، فصل‌نامۀ نوید و دیار
              دارا همکار بوده، چندین مقالۀ تحقیقی و پژوهشی‌اش در نشریات و مجلات:
              روزنامۀ اتفاق اسلام، معرفت، حامیان میراث فرهنگی، صدای جوان، آوای
              زن، مهاجر، دیار دارا، نوید و غیره منتشر شده است.
            </p>

            <p dir="rtl" className="paragraph">
              کام‌گار با تعدادی از همکاران فرهنگی¬اش از جمله طارق جلالی‌پور و
              یاسر معز در سال 1396 خورشیدی انتشاراتی را، راه¬اندازی نمود. این
              انتشارات به¬نام نشر کام‌گار شهرت دارد و تا کنون چندین اثر را به
              دست چاپ و نشر سپرده و کارهای فراوانی هم روی دست دارند. از زمان
              تأسیس نشر کام‌گار کارهای زیادی از این آدرس نشر شده که بیش‌ترِ این
              ارقام تحقیق‌ها و گزارش‌های تاریخی خود آقای کام‌گار در زمینه‌های
              متعدد بوده که اقبال چاپ یافته است. آثاری که از این آدرس تا کنون
              منتشر شده از این قرار است: آثار غوریان حمیدالله کام‌گار، گلستان
              معرفت میرزا حبیب‌الله صبوری، از خانه‌های کاغذی تا کعبۀ دل‌ فردیانا
              طبیب‌زاده، لاله‌های هجران عزت آهنگر، کوسویه در امتداد تاریخ
              حمیدالله کام‌گار، از الف تا یار بهرام هیمه، و انگار بغض‌ها شکستند
              شیما مهجور، جرم یوسف مهران پوپل، قسم به عشق که آیینۀ محبت شد عزت
              آهنگر، سیری بر خطۀ اوبه ناهید امانیار، میرزایان برناباد مایل هروی
              با تصحیح، تحقیق و تعلیقات حمیدالله کام‌گار، سریرگاه حمیدالله
              کام‌گار، تاریخ‌نامۀ فوشنج حمیدالله کام‌گار، حماسه‌سرای هری
              حمیدالله کام‌گار، مخترع توأمان حمیدالله کام‌گار، حصار جنون ذکیه
              نوری، سال‌نامه‌ی فرگرد (شماره‌ی نخست).
            </p>
            <p dir="rtl" className="paragraph">
              از دیگر کارها و فعالیت‌های فرهنگی کام‌گار می¬توان به جمع¬آوری، چاپ
              و نشر ده¬ها اثر از شاعران، نویسندگان و پژوهش¬گران نام گرفت.
              ویراستاری مجموعۀ تحقیقی پژوهشی سیری بر خطۀ اوبه اثر ناهید امانیار،
              ویراستاری مجموعۀ دستآوردهای نوازندگان زن در هرات با ترجمه و تعلیق
              از نصرالدین سلجوقی، مقدمه‌ای بر کتاب درد در قالب شعر اثر شیرین
              شایسته، مقدمه‌ای بر کتاب سرمه در صدف – گزیده ‌صد و ده غزل از خواجه
              اسماعیل دارا به انتخاب دکتر محمد عثمان نورزایی، مقدمه‌ای بر کتاب
              دیوان میرآقا عرب غوریانی، مقدمه‌ای بر کتاب گلستان معرفت اثر میرزا
              حبیب‌الله صبوری، مقدمه‌ای بر کتاب دیوان عبدالکریم علیل‌زار
              غوریانی، هم‌چنان در کتاب‌های: اخوت اسلامی، تلازم شریعت و طریقت و
              جهاد و مقام شهید از دیدگاه اسلام اثر مولوی عبدالحمید طاهری، اشک
              قلم اثر عبدالرشید منتظر غوریانی، گریه‌های انقلاب اثر عبدالکریم
              نیازی، گنجینۀ ادب اثر استاد عبدالمجید احدیار، فروغ ارشاد اثر
              عبدالغفور قاسمی، ورزش از دیدگاه اسلام اثر جلیل‌احمد رائع محمدی،
              آهنگ دل و مروارید سخن اثر حفیظ‌الله جلیس غوریانی، گلچین حقیقت‌ها
              اثر سید حلیم‌شاه قلندری، آفتاب دوباره طلوع خواهد کرد اثر حلیمه
              فقیری، باغی در آتش اثر محمدغوث موحد ولی‌محمدی، صفات خوب و بد
              انسانی اثر محمد قسیم تاج، حصار جنون ذکیه نوری و ... به عنوان
              حروف‌نگار نقش داشته است.
            </p>
            <p dir="rtl" className="paragraph">
              کام‌گار در کنار نویسندگی و روزنامه¬نگاری، شاعری است جوان؛ غزل قالب
              شعری¬اش است. اگرچه در این راه پُر پیچ و خم قدم‌های کوتاهی برداشته
              امّا برخی سروده‌هایش الحق که زیباست و لطیف. نخستین غزلش در مجلۀ
              دیار دارا، دومین غزلش در نشریۀ مهاجر منتشر شد. هم‌چنان شرح حال،
              آثار و چند نمونه از اشعارش با دیگر شاعران در مجموعۀ «گزیدۀ غزلیات
              شاعران معاصر» و «گزیدۀ غزلیات شاعران معاصر (2)» در تهران و نیز چند
              نمونه از اشعارش در کتاب «پژواک ناژوها» و نیز در کتاب «روی گسل» در
              هرات منتشر شده است.
            </p>
            <p dir="rtl" className="paragraph">
              کتاب‌های: آثار غوریان، تاریخ‌نامه‌ی فوشنج، کوسویه در امتداد تاریخ
              (پژوهشی در تاریخ، جغرافیا و رجال کهسانِ هرات)، سریرگاه (پژوهشی
              پیرامون مراکز و پایتخت‌های تاریخی آریانا، خراسان و افغانستان)،
              تصحیح، تحقیق و تعلیقات بر کتاب میرزایان برناباد اثر مایل هروی،
              حماسه‌سرای هری (نگاهی به کارنامه‌ی صدرالدین ربیعی پوشنگی)،
              تاریخچه‌‎ی کروخ (کار مشترک) و مخترع توأمان (شرح حال، احوال و آثار
              مجنون رفیقی هروی) از جمله آثار منتشرشده‌ی کام‌گار است.
            </p>
            <p dir="rtl" className="paragraph">
              تذکرة¬الشعرای هرات، آشنایی با بناهای تاریخی هرات، تصحیح دیوان شحنه
              خراسانی (محمد مهدی‌خان اوبهی مازندرانی)، تصحیح شرح قصائد صنعتی
              حافظ‌علی عیشی هروی، شکوه جامی (معرفی و نسخه‌شناسی آثار مولانا
              نورالدین عبدالرحمان جامی)، جمع¬آوری مجموعه مقالات زنده¬یاد پوهاند
              دکتر جلال¬الدین صدیقی، سیمای گردشگری گذره، سفرنامه‌ی بادغیس،
              ناخدای نستعلیق خراسان (شرح حال، احوال و آثار میرعلی هروی)، و چند
              مجموعه‌ی تحقیقی و پژوهشی دیگر از آثار و کارهای روی دست حمیدالله
              کام‌گار است که مجموعه‌ی تذکرۀالشعرای هرات وآشنایی با بناهای تاریخی
              هرات از مهم‌ترین و ماندگارترین و پُر حجم‌ترین آثارش خواهد بود.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutFullPage;