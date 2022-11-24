export class MenuItem {
    constructor(
        public name: string,
        public route: string,
        public toolTip: string,
        public icon: string = ''
    ) {}
}

export const menuList = [
    new MenuItem('Home', '/home', '', 'science'),
    new MenuItem('PHC Confirmation ', '/discharged-patients', '', 'biotech'),
    new MenuItem('ASHA Assignment', '/assign-asha', '', 'calculate'),
    new MenuItem('Follow Ups', '/followup-list', '', 'flash_on'),
    new MenuItem('Track Child', '/track-child', '', 'flash_on')
];