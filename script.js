function split() {
    var words = $('h2').text().split('');
    for (var i = 0; i < words.length; i++) {
        words[i] = '<span>' + words[i] + '</span>';
    }
    var text = words.join('');
    $('h2').html(text);
}

function show_text() {
    split();
    var in_speed = 10;
    var count = 0;
    $('h2 span').each(function() {
        $(this).delay(1300 + in_speed * count).animate({ opacity: '1' }, 200);
        count++;
    });
}

$(document).ready(function() {
    show_text();
});

// Keep your existing JavaScript code here
// Add event listener to navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        // Remove active class from all links
        document.querySelectorAll('nav a').forEach(l => l.classList.remove('active'));
        // Add active class to clicked link
        link.classList.add('active');
    });
});

// Smooth scrolling to sections
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href');
        const section = document.querySelector(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});