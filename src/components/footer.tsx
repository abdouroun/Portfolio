export function Footer() {
    return (
        <footer>
            <span>© {new Date().getFullYear()} Abdelmouhaimine Roun</span>
            <div className="footer-right">
                <a href="mailto:abdouroun@gmail.com">Email ↗</a>
                <a href="Abdelmouhaimine-Roun-CV.pdf" download>
                    CV ↓
                </a>
                <a href="#">Back to top ↑</a>
            </div>
        </footer>
    );
}
