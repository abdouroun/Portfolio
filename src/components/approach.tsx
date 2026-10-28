const principles = [
    {
        number: '01',
        title: 'Understand the problem.',
        text: 'Work with product teams and stakeholders to connect business needs to clear technical decisions.',
    },
    {
        number: '02',
        title: 'Build the foundation.',
        text: 'Design reusable components and reliable integrations that make the next feature easier to deliver.',
    },
    {
        number: '03',
        title: 'Raise the standard.',
        text: 'Use code reviews, testing, and mentorship to strengthen both the software and the team building it.',
    },
];

export function Approach() {
    return (
        <div className="expertise-approach" id="approach" aria-labelledby="approach-title">
            <div className="section-head">
                <div>
                    <div className="kicker">MY APPROACH</div>
                    <h3 id="approach-title">Good software is a team effort.</h3>
                </div>
                <p>
                    A practical approach shaped by frontend architecture and technical leadership.
                </p>
            </div>
            <div className="principles">
                {principles.map(({ number, title, text }) => (
                    <article className="principle" key={number}>
                        <span className="principle-number">{number} /</span>
                        <h4>{title}</h4>
                        <p>{text}</p>
                    </article>
                ))}
            </div>
        </div>
    );
}
