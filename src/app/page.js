import styles from "./page.module.css";
import FeaturedList from "@/components/featured/FeaturedList";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import MenuList from "@/components/menu/MenuList";

export default function Home() {
  return (
    <div className={styles.container}>
      <FeaturedList />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <MenuList />
      </div>
    </div>
  );
}
