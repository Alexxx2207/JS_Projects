function editElement(element, matcher, replacer) {
    while(element.textContent.includes(matcher))
        element.textContent = element.textContent.replace(matcher, replacer);
}