const sections = [
  {
    id: 'header',
    label: 'Header',
    icon: '📑',
    content: `
      <header style="
        padding: 20px;
        margin: 10px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        background-color: #4A90E2;
        color: white;
        text-align: center;
      ">
        <h1>Header Section</h1>
      </header>
    `,
  },
  {
    id: 'navbar',
    label: 'Navbar',
    icon: '📌',
    content: `
      <nav style="
        display: flex;
        justify-content: space-between;
        padding: 15px 30px;
        background-color: #333;
        color: white;
      ">
        <div style="font-weight: bold; font-size: 1.2em;">Brand Name</div>
        <ul style="list-style: none; display: flex; gap: 15px;">
          <li><a href="#" style="color: white; text-decoration: none;">Home</a></li>
          <li><a href="#" style="color: white; text-decoration: none;">About</a></li>
          <li><a href="#" style="color: white; text-decoration: none;">Services</a></li>
          <li><a href="#" style="color: white; text-decoration: none;">Contact</a></li>
        </ul>
      </nav>
    `,
  },
  {
    id: 'photo',
    label: 'Photo',
    icon: '📷',
    content: `
      <div class="photo-section" style="
        padding: 20px;
        text-align: center;
        border: 1px solid #ddd;
        border-radius: 8px;
      ">
        <img src="https://via.placeholder.com/300" alt="Upload Photo" style="max-width: 100%; height: auto;" />
      </div>
    `,
  },
  {
    id: 'hero',
    label: 'Hero',
    icon: '🎉',
    content: `
      <section class="hero" style="
        padding: 60px;
        background-image: url('your-image-url.jpg');
        color: white;
        text-align: center;
      ">
        <h2>Welcome to Our Website</h2>
        <p>Your success is our priority</p>
        <button style="padding: 10px 20px; background-color: #FF5722; color: white;">Learn More</button>
      </section>
    `,
  },
  {
    id: 'information',
    label: 'Information',
    icon: '📘',
    content: `
      <section class="information" style="
        padding: 40px;
        background-color: #f1f1f1;
        text-align: left;
      ">
        <h2>Information</h2>
        <p>This section provides important information about our services and policies.</p>
      </section>
    `,
  },
  {
    id: 'about',
    label: 'About',
    icon: 'ℹ️',
    content: `
      <section class="about" style="
        padding: 40px;
        background-color: #F5F5F5;
        text-align: left;
      ">
        <h2>About Us</h2>
        <p>We are committed to delivering the best service.</p>
      </section>
    `,
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: '📞',
    content: `
      <section class="contact" style="
        padding: 40px;
        background-color: #e8f4fc;
        text-align: center;
      ">
        <h2>Contact Us</h2>
        <form style="display: flex; flex-direction: column; max-width: 400px; margin: auto;">
          <input type="text" placeholder="Your Name" style="padding: 10px; margin: 5px 0;" />
          <input type="email" placeholder="Your Email" style="padding: 10px; margin: 5px 0;" />
          <textarea placeholder="Your Message" style="padding: 10px; margin: 5px 0;"></textarea>
          <button type="submit" style="padding: 10px; background-color: #4A90E2; color: white;">Submit</button>
        </form>
      </section>
    `,
  },
  {
    id: 'skills',
    label: 'Skills',
    icon: '💪',
    content: `
      <section class="skills" style="
        padding: 40px;
        background-color: #f9f9f9;
        text-align: center;
      ">
        <h2>Our Skills</h2>
        <div style="display: flex; justify-content: center; gap: 20px; margin-top: 20px;">
          <div style="width: 100px; background-color: #FF5722; color: white; padding: 10px;">
            <h3>JavaScript</h3>
            <p>85%</p>
          </div>
          <div style="width: 100px; background-color: #03A9F4; color: white; padding: 10px;">
            <h3>React</h3>
            <p>90%</p>
          </div>
          <div style="width: 100px; background-color: #4CAF50; color: white; padding: 10px;">
            <h3>CSS</h3>
            <p>80%</p>
          </div>
        </div>
      </section>
    `,
  },
  {
    id: 'course-feedback',
    label: 'Course Feedback',
    icon: '📊',
    content: `
      <section class="course-feedback" style="
        padding: 40px;
        background-color: #f9f9f9;
        text-align: center;
      ">
        <h2>Course Feedback</h2>
        <p>Share your thoughts about the course.</p>
        <textarea style="width: 100%; height: 100px; padding: 10px;" placeholder="Your feedback..."></textarea>
        <button style="margin-top: 10px; padding: 10px 20px; background-color: #4CAF50; color: white;">Submit</button>
      </section>
    `,
  },
  {
    id: 'curriculum',
    label: 'Curriculum',
    icon: '📚',
    content: `
      <section class="curriculum" style="
        padding: 40px;
        background-color: #ffffff;
        text-align: center;
      ">
        <h2>Curriculum</h2>
        <ul style="list-style: none; padding: 0;">
          <li>Module 1: Introduction</li>
          <li>Module 2: Intermediate Concepts</li>
          <li>Module 3: Advanced Topics</li>
        </ul>
      </section>
    `,
  },
  {
    id: 'forms',
    label: 'Forms',
    icon: '📝',
    content: `
      <section class="forms" style="
        padding: 40px;
        background-color: #f5f5f5;
      ">
        <h2>Contact Form</h2>
        <form>
          <input type="text" placeholder="Name" style="width: 100%; padding: 10px; margin-bottom: 10px;">
          <input type="email" placeholder="Email" style="width: 100%; padding: 10px; margin-bottom: 10px;">
          <textarea placeholder="Message" style="width: 100%; padding: 10px;"></textarea>
          <button type="submit" style="margin-top: 10px; padding: 10px 20px; background-color: #4CAF50; color: white;">Submit</button>
        </form>
      </section>
    `,
  },
  {
    id: 'courses-list',
    label: 'Courses List',
    icon: '📋',
    content: `
      <section class="courses-list" style="
        padding: 40px;
        background-color: #ffffff;
        text-align: center;
      ">
        <h2>Available Courses</h2>
        <ul style="list-style: none; padding: 0;">
          <li>Course 1: Web Development Basics</li>
          <li>Course 2: Advanced JavaScript</li>
          <li>Course 3: UI/UX Design Principles</li>
        </ul>
      </section>
    `,
  },
  {
    id: 'placeholder',
    label: 'Placeholder',
    icon: '🔲',
    content: `
      <section class="placeholder" style="
        padding: 40px;
        background-color: #e0e0e0;
        text-align: center;
      ">
        <h2>Placeholder Section</h2>
        <p>This is a placeholder section for future content.</p>
      </section>
    `,
  },
  {
    id: 'custom-design',
    label: 'Custom Design',
    icon: '🎨',
    content: `
      <section class="custom-design" style="
        padding: 40px;
        background-color: #fff;
        border: 2px dashed #ccc;
        text-align: center;
      ">
        <h2>Custom Design Section</h2>
        <p>Use this section for custom designs and layouts.</p>
      </section>
    `,
  },
  {
    id: 'slider',
    label: 'Slider',
    icon: '📸',
    content: `
      <section class="slider" style="
        padding: 40px;
        background-color: #ffffff;
        text-align: center;
      ">
        <h2>Image Slider</h2>
        <div style="display: flex; overflow-x: auto;">
          <img src="image1.jpg" alt="Slide 1" style="width: 100%; margin-right: 10px;">
          <img src="image2.jpg" alt="Slide 2" style="width: 100%; margin-right: 10px;">
          <img src="image3.jpg" alt="Slide 3" style="width: 100%;">
        </div>
      </section>
    `,
  },
  {
    id: 'basic',
    label: 'Basic Text',
    icon: '🔤',
    content: `
      <section class="basic" style="
        padding: 20px;
        background-color: #f9f9f9;
      ">
        <p>This is a basic text section. Use it for simple content blocks.</p>
      </section>
    `,
  },
  {
    id: 'process',
    label: 'Process',
    icon: '⚙️',
    content: `
      <section class="process" style="
        padding: 40px;
        background-color: #ffffff;
        text-align: center;
      ">
        <h2>Our Process</h2>
        <div style="display: flex; justify-content: center; gap: 20px;">
          <div style="width: 120px; padding: 20px; background-color: #E3F2FD; border-radius: 5px;">
            <h3>Step 1</h3>
            <p>Understanding Requirements</p>
          </div>
          <div style="width: 120px; padding: 20px; background-color: #E3F2FD; border-radius: 5px;">
            <h3>Step 2</h3>
            <p>Planning & Design</p>
          </div>
          <div style="width: 120px; padding: 20px; background-color: #E3F2FD; border-radius: 5px;">
            <h3>Step 3</h3>
            <p>Development</p>
          </div>
          <div style="width: 120px; padding: 20px; background-color: #E3F2FD; border-radius: 5px;">
            <h3>Step 4</h3>
            <p>Testing & Launch</p>
          </div>
        </div>
      </section>
    `,
  },
  {
    id: 'features',
    label: 'Features',
    icon: '✨',
    content: `
      <section class="features" style="
        padding: 40px;
        background-color: #f5f5f5;
        text-align: center;
      ">
        <h2>Features</h2>
        <div style="display: flex; justify-content: center; gap: 20px;">
          <div style="width: 150px; padding: 20px; background-color: #FFEB3B; border-radius: 5px;">
            <h3>Feature 1</h3>
            <p>High Performance</p>
          </div>
          <div style="width: 150px; padding: 20px; background-color: #FFEB3B; border-radius: 5px;">
            <h3>Feature 2</h3>
            <p>User Friendly</p>
          </div>
          <div style="width: 150px; padding: 20px; background-color: #FFEB3B; border-radius: 5px;">
            <h3>Feature 3</h3>
            <p>Scalable Design</p>
          </div>
        </div>
      </section>
    `,
  },
  {
    id: 'products-services',
    label: 'Products & Services',
    icon: '🛠️',
    content: `
      <section class="products-services" style="
        padding: 40px;
        background-color: #ffffff;
        text-align: center;
      ">
        <h2>Our Products & Services</h2>
        <div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center;">
          <div style="width: 200px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3>Product 1</h3>
            <p>High quality service.</p>
          </div>
          <div style="width: 200px; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3>Service 1</h3>
            <p>Customized solutions.</p>
          </div>
        </div>
      </section>
    `,
  },
  {
    id: 'team',
    label: 'Team',
    icon: '👥',
    content: `
      <section class="team" style="
        padding: 40px;
        background-color: #f9f9f9;
        text-align: center;
      ">
        <h2>Meet Our Team</h2>
        <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
          <div style="width: 150px; padding: 20px; background-color: #ffffff; border: 1px solid #ddd; border-radius: 5px;">
            <img src="team-member1.jpg" alt="Team Member 1" style="width: 100%; height: auto; border-radius: 50%;" />
            <h3>John Doe</h3>
            <p>CEO</p>
          </div>
          <div style="width: 150px; padding: 20px; background-color: #ffffff; border: 1px solid #ddd; border-radius: 5px;">
            <img src="team-member2.jpg" alt="Team Member 2" style="width: 100%; height: auto; border-radius: 50%;" />
            <h3>Jane Smith</h3>
            <p>CTO</p>
          </div>
        </div>
      </section>
    `,
  },
  {
    id: 'help-faq',
    label: 'Help & FAQ',
    icon: '❓',
    content: `
      <section class="faq" style="
        padding: 40px;
        background-color: #fafafa;
      ">
        <h2>Help & FAQ</h2>
        <div style="padding: 10px; border-bottom: 1px solid #ddd;">
          <strong>What services do you offer?</strong>
          <p>We offer a variety of digital solutions to meet your needs.</p>
        </div>
        <div style="padding: 10px; border-bottom: 1px solid #ddd;">
          <strong>How can I contact customer support?</strong>
          <p>You can reach out to us via the contact form or our support email.</p>
        </div>
      </section>
    `,
  },
  {
    id: 'testimonial',
    label: 'Testimonial',
    icon: '🗣️',
    content: `
      <section class="testimonial" style="
        padding: 40px;
        background-color: #f9f9f9;
        text-align: center;
      ">
        <h2>What Our Clients Say</h2>
        <blockquote style="
          font-style: italic;
          color: #333;
          padding: 20px;
          border-left: 5px solid #FF5722;
          max-width: 600px;
          margin: 20px auto;
        ">
          "This service is outstanding! Our experience was beyond expectations."
        </blockquote>
        <p>- Happy Client</p>
      </section>
    `,
  },
  {
    id: 'pricing',
    label: 'Pricing',
    icon: '💰',
    content: `
      <section class="pricing" style="
        padding: 40px;
        background-color: #FFFFFF;
        text-align: center;
      ">
        <h2>Our Pricing</h2>
        <div style="display: flex; justify-content: center; gap: 20px;">
          <div style="
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            width: 200px;
          ">
            <h3>Basic</h3>
            <p>$10/month</p>
            <p>Basic feature set</p>
          </div>
          <div style="
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            width: 200px;
            background-color: #E3F2FD;
          ">
            <h3>Premium</h3>
            <p>$20/month</p>
            <p>All features included</p>
          </div>
        </div>
      </section>
    `,
  },
  {
    id: 'coming-soon',
    label: 'Coming Soon',
    icon: '⏳',
    content: `
      <section class="coming-soon" style="
        padding: 60px;
        background-color: #ececec;
        text-align: center;
      ">
        <h2>Coming Soon</h2>
        <p>We're working hard on something exciting. Stay tuned!</p>
        <input type="email" placeholder="Enter your email" style="padding: 10px; margin: 10px;"/>
        <button style="padding: 10px; background-color: #4A90E2; color: white;">Notify Me</button>
      </section>
    `,
  },
  {
    id: 'page-not-found',
    label: 'Page Not Found',
    icon: '🚫',
    content: `
      <section class="page-not-found" style="
        padding: 60px;
        text-align: center;
        color: #333;
      ">
        <h2>404 - Page Not Found</h2>
        <p>The page you're looking for doesn't exist.</p>
        <a href="/" style="
          padding: 10px 20px;
          background-color: #FF5722;
          color: white;
          text-decoration: none;
          border-radius: 5px;
        ">Go Back Home</a>
      </section>
    `,
  },
  {
    id: 'as-featured-on',
    label: 'As Featured On',
    icon: '🌟',
    content: `
      <section class="as-featured-on" style="
        padding: 40px;
        text-align: center;
        background-color: #f9f9f9;
      ">
        <h2>As Featured On</h2>
        <div style="display: flex; justify-content: center; gap: 20px; margin-top: 20px;">
          <img src="logo1.png" alt="Logo 1" style="width: 100px; height: auto;" />
          <img src="logo2.png" alt="Logo 2" style="width: 100px; height: auto;" />
          <img src="logo3.png" alt="Logo 3" style="width: 100px; height: auto;" />
        </div>
      </section>
    `,
  },
  {
    id: 'partners',
    label: 'Partners',
    icon: '🤝',
    content: `
      <section class="partners" style="
        padding: 40px;
        background-color: #FFFFFF;
        text-align: center;
      ">
        <h2>Our Partners</h2>
        <div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 20px; margin-top: 20px;">
          <div class="partner-item" style="width: 120px;">
            <img src="partner1.png" alt="Partner 1" style="width: 100%; height: auto;" />
            <p>Partner 1</p>
          </div>
          <div class="partner-item" style="width: 120px;">
            <img src="partner2.png" alt="Partner 2" style="width: 100%; height: auto;" />
            <p>Partner 2</p>
          </div>
          <div class="partner-item" style="width: 120px;">
            <img src="partner3.png" alt="Partner 3" style="width: 100%; height: auto;" />
            <p>Partner 3</p>
          </div>
        </div>
      </section>
    `,
  },
  {
    id: 'achievements',
    label: 'Achievements',
    icon: '🏆',
    content: `
      <section class="achievements" style="
        padding: 40px;
        background-color: #f0f8ff;
        text-align: center;
      ">
        <h2>Our Achievements</h2>
        <div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 20px; margin-top: 20px;">
          <div class="achievement-item" style="
            width: 200px;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background-color: #ffffff;
          ">
            <h3>2020</h3>
            <p>Best Startup Award</p>
          </div>
          <div class="achievement-item" style="
            width: 200px;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background-color: #ffffff;
          ">
            <h3>2021</h3>
            <p>Top Innovator</p>
          </div>
          <div class="achievement-item" style="
            width: 200px;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background-color: #ffffff;
          ">
            <h3>2022</h3>
            <p>Global Impact Leader</p>
          </div>
        </div>
      </section>
    `,
  },
  {
    id: 'footer',
    label: 'Footer',
    icon: '📜',
    content: `
      <footer style="
        padding: 20px;
        margin: 10px;
        background-color: #263238;
        color: white;
        text-align: center;
        font-size: 14px;
      " role="contentinfo" aria-label="Footer">
        <div style="margin-bottom: 10px;">
          <p style="margin: 0;">&copy; 2023 Your Company Name</p>
        </div>
        <div style="display: flex; justify-content: center; gap: 15px;">
          <a href="/privacy-policy" style="color: #B0BEC5; text-decoration: none;">Privacy Policy</a>
          <a href="/terms" style="color: #B0BEC5; text-decoration: none;">Terms of Service</a>
          <a href="/contact" style="color: #B0BEC5; text-decoration: none;">Contact Us</a>
        </div>
        <div style="margin-top: 15px;">
          <small>Follow us on:</small>
          <a href="https://facebook.com" target="_blank" style="margin-left: 10px; color: #B0BEC5; text-decoration: none;">Facebook</a>
          <a href="https://twitter.com" target="_blank" style="margin-left: 10px; color: #B0BEC5; text-decoration: none;">Twitter</a>
          <a href="https://instagram.com" target="_blank" style="margin-left: 10px; color: #B0BEC5; text-decoration: none;">Instagram</a>
        </div>
      </footer>
    `,
  },
];

export default sections;
