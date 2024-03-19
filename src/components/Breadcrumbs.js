import { navItmes, breadcrumbs } from "../data";

const Breadcrumbs = ({selectedItem, selectedBread}) => {
    return (
        <div className="pl-10 pt-5">
            <div className="flex">
                <span className="font-medium">
                    SUBARUアクセサリマスタ / {navItmes[selectedItem]}{breadcrumbs[selectedBread]}
                </span>
            </div>
        </div>
    )
}

export default Breadcrumbs;