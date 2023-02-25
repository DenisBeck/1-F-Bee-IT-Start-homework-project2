export const flsModules = {
    setMaxHeightInColumns() {
        const items = document.querySelectorAll('.column-title');
        let maxHeight = 0;
        for(let i = 0; i < items.length; i++) {
            let itemHeight = parseInt(getComputedStyle(items[i]).getPropertyValue('height'));
            maxHeight = maxHeight > itemHeight ? maxHeight : itemHeight;
        }
        items.forEach(item => item.style.height = maxHeight + 'px')
    }
}