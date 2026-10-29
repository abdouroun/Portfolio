import { useLanguage } from '../i18n/language';
export function Footer() {
    const { t } = useLanguage();
    return (
        <footer>
            <span>
                © {new Date().getFullYear()}
                {t('footer.abdelmouhaimineRoun')}
            </span>
            <div className="footer-right">
                <a href="#">{t('footer.backToTop')}</a>
            </div>
        </footer>
    );
}
