import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PrivacyPolicyPage.module.css';

export default function PrivacyPolicyPage() {
    const navigate = useNavigate();

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.accent} />
                    <h1 className={styles.title}>Privacy Policy</h1>
                    <p className={styles.lastUpdated}>Last Updated: March 10, 2026</p>
                </div>

                {/* Intro */}
                <p className={styles.intro}>
                    At <strong>Candid Optronix Private Limited</strong> (accessible from{' '}
                    <a href="http://optronix.in/" className={styles.link} target="_blank" rel="noreferrer">
                        http://optronix.in/
                    </a>
                    ), one of our main priorities is the privacy of our visitors. This Privacy Policy document
                    contains types of information that is collected and recorded by Optronix and how we use it.
                </p>

                {/* Sections */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>1. Consent</h2>
                    <p className={styles.text}>
                        By using our website, you hereby consent to our Privacy Policy and agree to its terms.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>2. Information We Collect</h2>
                    <p className={styles.text}>
                        The personal information that you are asked to provide, and the reasons why you are asked
                        to provide it, will be made clear to you at the point we ask you to provide your personal
                        information.
                    </p>
                    <div className={styles.subBlock}>
                        <h3 className={styles.subTitle}>Direct Contact</h3>
                        <p className={styles.text}>
                            If you contact us directly, we may receive additional information about you such as
                            your name, email address, phone number, the contents of the message and/or attachments
                            you may send us, and any other information you may choose to provide.
                        </p>
                    </div>
                    <div className={styles.subBlock}>
                        <h3 className={styles.subTitle}>Account Registration</h3>
                        <p className={styles.text}>
                            When you register for an Account or request a quote for products (like Splicing
                            Machines or OTDRs), we may ask for your contact information, including items such as
                            name, company name, address, email address, and telephone number.
                        </p>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>3. How We Use Your Information</h2>
                    <p className={styles.text}>We use the information we collect in various ways, including to:</p>
                    <ul className={styles.list}>
                        <li>Provide, operate, and maintain our website.</li>
                        <li>Improve, personalize, and expand our website offerings.</li>
                        <li>Understand and analyze how you use our website.</li>
                        <li>Develop new products, services, features, and functionality.</li>
                        <li>
                            Communicate with you, either directly or through one of our partners, including for
                            customer service, to provide you with updates and other information relating to the
                            website, and for marketing and promotional purposes.
                        </li>
                        <li>Send you emails or SMS regarding technical service camps or product launches.</li>
                        <li>Find and prevent fraud.</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>4. Log Files</h2>
                    <p className={styles.text}>
                        Optronix follows a standard procedure of using log files. These files log visitors when
                        they visit websites. The information collected by log files includes internet protocol (IP)
                        addresses, browser type, Internet Service Provider (ISP), date and time stamp,
                        referring/exit pages, and possibly the number of clicks. These are not linked to any
                        information that is personally identifiable.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>5. Third-Party Privacy Policies</h2>
                    <p className={styles.text}>
                        Optronix's Privacy Policy does not apply to other advertisers or websites. Thus, we are
                        advising you to consult the respective Privacy Policies of these third-party ad servers for
                        more detailed information. It may include their practices and instructions about how to
                        opt-out of certain options.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>6. Data Protection Rights (DPDP Act India)</h2>
                    <p className={styles.text}>
                        We would like to make sure you are fully aware of all of your data protection rights.
                        Every user is entitled to the following:
                    </p>
                    <ul className={styles.list}>
                        <li>
                            <strong>The right to access</strong> – You have the right to request copies of your
                            personal data.
                        </li>
                        <li>
                            <strong>The right to rectification</strong> – You have the right to request that we
                            correct any information you believe is inaccurate.
                        </li>
                        <li>
                            <strong>The right to erasure</strong> – You have the right to request that we erase
                            your personal data, under certain conditions.
                        </li>
                        <li>
                            <strong>The right to restrict processing</strong> – You have the right to request that
                            we restrict the processing of your personal data.
                        </li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>7. Security of Data</h2>
                    <p className={styles.text}>
                        The security of your data is important to us, but remember that no method of transmission
                        over the Internet, or method of electronic storage is 100% secure. While we strive to use
                        commercially acceptable means to protect your Personal Data, we cannot guarantee its
                        absolute security.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>8. Contact Information</h2>
                    <p className={styles.text}>
                        If you have additional questions or require more information about our Privacy Policy, do
                        not hesitate to contact us.
                    </p>
                    <div className={styles.contactCard}>
                        <p className={styles.contactName}>Candid Optronix Private Limited</p>
                        <p className={styles.contactDetail}>
                            <span className={styles.contactLabel}>Address:</span> A-129/2, Nirankari Colony, New
                            Delhi, Delhi - 110009
                        </p>
                        <p className={styles.contactDetail}>
                            <span className={styles.contactLabel}>Mobile:</span>{' '}
                            <a href="tel:+919811308000" className={styles.link}>
                                +91-9811308000
                            </a>
                        </p>
                        <p className={styles.contactDetail}>
                            <span className={styles.contactLabel}>Email:</span>{' '}
                            <a href="mailto:info@optronix.in" className={styles.link}>
                                info@optronix.in
                            </a>
                        </p>
                    </div>
                </section>

                {/* Back button */}
                <div className={styles.backWrap}>
                    <button className={styles.backBtn} onClick={() => navigate(-1)}>
                        ← Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}
