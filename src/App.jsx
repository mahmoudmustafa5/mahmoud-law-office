
import './App.css';
const office = {
  whatsapp1: '201001766092',
  whatsapp2: '201153421350',
  facebook: 'https://www.facebook.com/share/1C6eQSWHby/',
  address: 'سوهاج، ساقلتة، الجلاوية، نجع عباسة',
};


const services = [
  {
    number: '01',
    title: 'القضايا المدنية',
    description: 'تقديم الدعم القانوني في المنازعات المدنية والمطالبات والحقوق التعاقدية.',
  },
  {
    number: '02',
    title: 'الأحوال الشخصية',
    description: 'التعامل مع قضايا الأسرة وفقًا للقوانين والإجراءات المعمول بها.',
  },
  {
    number: '03',
    title: 'تأسيس الشركات',
    description: 'المساعدة القانونية في تأسيس الشركات وصياغة العقود ومراجعتها.',
  },
  {
    number: '04',
    title: 'الاستشارات القانونية',
    description: 'توضيح المواقف القانونية ومساعدة العملاء على فهم الخيارات المتاحة.',
  },
];

function App() {
  return (
    <div className="site-wrapper" dir="rtl">
      <header className="navbar">
        <a href="#home" className="brand">
          <span className="brand-symbol">§</span>
          <span className="brand-name">
            <strong>مكتب الاستاذ محمود شاكر </strong>
            <small>للمحاماة والاستشارات القانونية</small>
          </span>
        </a>

        <nav className="nav-links">
          <a href="#home">الرئيسية</a>
          <a href="#about">عن المكتب</a>
          <a href="#services">خدماتنا</a>
          <a href="#contact">تواصل معنا</a>
        </nav>

        <a className="nav-cta" href="#contact">
          اطلب استشارة
          <span>↗</span>
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              التزام قانوني · ثقة · احترافية
            </div>

            <h1>
              العدالة تبدأ
              <br />
              من <span>معرفة حقوقك.</span>
            </h1>

            <p className="hero-description">
              نقدم خدمات قانونية باحترافية واهتمام بالتفاصيل،
              ونعمل على مساعدة عملائنا في فهم حقوقهم
              والتعامل مع شؤونهم القانونية بوضوح وثقة.
            </p>

            <div className="hero-actions">
              <a className="button-primary" href="#contact">
                احجز استشارتك
                <span>←</span>
              </a>
              <a className="button-secondary" href="#about">
                اكتشف المكتب
              </a>
            </div>

            <div className="hero-note">
              <span className="note-line" />
              <span>وضوح في المشورة، واهتمام بكل تفصيلة.</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="تصميم رمزي للعدالة">
            <div className="visual-frame">
              <div className="frame-corner corner-top" />
              <div className="frame-corner corner-bottom" />

              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />

              <div className="justice-mark">
                <span className="justice-symbol">§</span>
                <span className="justice-divider" />
                <span className="justice-caption">THE PURSUIT OF JUSTICE</span>
              </div>

              <span className="visual-index">EST. · LAW & JUSTICE</span>
              <span className="visual-number">01 — 04</span>
            </div>
          </div>

          <div className="hero-watermark">JUSTICE</div>
        </section>

        <section className="intro-strip" id="about">
          <div>
            <span className="section-kicker">منهجنا في العمل</span>
            <h2>قانون تفهمه، وخدمة تثق بها.</h2>
          </div>
          <p>
            نؤمن بأن العلاقة القانونية الناجحة تبدأ بالاستماع الجيد،
            وشرح الخيارات بوضوح، والتعامل مع كل ملف باهتمام ومسؤولية.
          </p>
        </section>

        <section className="services-section" id="services">
          <div className="section-heading">
            <div>
              <span className="section-kicker">خدماتنا القانونية</span>
              <h2>خبرة قانونية في خدمتك.</h2>
            </div>
            <span className="heading-index">01 / SERVICES</span>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
                <div className="service-icon">§</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" className="service-link">
                  استفسر عن الخدمة <span>←</span>
                </a>
              </article>
            ))}
          </div>

          <p className="services-disclaimer">
            تُعرض الخدمات وفقًا للتخصصات الفعلية للمكتب، ويُحدد نطاق كل خدمة بعد مراجعة الحالة.
          </p>
        </section>
<section className="contact-section" id="contact">
  <div>
    <span className="section-kicker">إدارة المكتب</span>
    <h2>ابدأ بخطوة واضحة.</h2>
    <p>
      للاستفسار عن الخدمات أو طلب موعد، تواصل مع المكتب مباشرة.
    </p>
  </div>

  <a
    className="button-primary"
    href={`https://wa.me/${office.whatsapp2}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    01153421350 <span>↗</span>
  </a>

  <a
    className="button-primary"
    href={`https://wa.me/${office.whatsapp1}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    01001766092 <span>↗</span>
  </a>

  <a
    className="button-secondary"
    href={office.facebook}
    target="_blank"
    rel="noopener noreferrer"
  >
    صفحة فيسبوك <span>↗</span>
  </a>
</section>
      </main>

      <footer className="footer">
        <a href="#home" className="footer-brand">§ مكتب الاستاذ محمود شاكر </a>
        <span>© {new Date().getFullYear()} جميع الحقوق محفوظة.</span>
        <a href="#home">العودة للأعلى ↑</a>
      </footer>
    </div>
  );
}

export default App;
