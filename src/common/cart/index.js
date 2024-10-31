import styles from './cart.module.scss';

export default function Cart({ isOpen, toggleCart }) {
  return (
    <div className={`${styles.cart} ${isOpen ? styles.active : ''}`}>
      <div className={styles.cartContent}>
        <div className={styles.cartHeader}>
          <button className={styles.close} onClick={toggleCart}>X</button>
          <h2>Cart</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatibus porro praesentium dolor, blanditiis accusantium inventore nesciunt modi est eligendi fugiat facilis cumque in ut exercitationem. Obcaecati qui recusandae explicabo?
            Mollitia officiis cupiditate voluptatibus non. Deleniti consequatur a, consequuntur reiciendis ratione odit. Obcaecati laudantium reprehenderit totam voluptatem optio sint minus qui alias adipisci suscipit accusantium, eligendi nobis magni nemo voluptatibus.
            Beatae saepe soluta harum exercitationem voluptatem inventore ut maxime nihil iusto non? Accusantium dolore recusandae nobis iure corrupti asperiores sed, facilis temporibus id iusto eaque, nulla non officia cumque illum?
            Nesciunt aliquam voluptas mollitia! Et beatae earum quis, omnis deleniti corrupti excepturi provident voluptate hic, sunt, ea culpa soluta dolorem! Voluptate maiores consequuntur voluptatum maxime saepe, perferendis impedit corrupti rem?
            Ut esse, corporis rem aliquam natus repellendus dignissimos error illum vel quisquam quod magni nemo delectus ducimus blanditiis iste facilis consequatur, voluptatem ipsam fuga ea perspiciatis dolor architecto? Id, aspernatur.
            Earum totam, facere neque repudiandae quae recusandae. Culpa error delectus necessitatibus sed repellendus, laborum quam veritatis dolore nihil magnam, distinctio doloremque rem quibusdam qui voluptatem officia labore! Laborum, a architecto.
            Voluptatum adipisci ex sit, provident repellendus quisquam! Ducimus doloremque laudantium eaque exercitationem amet nihil consequuntur itaque natus quibusdam repudiandae vero eum cumque et similique eligendi nisi voluptate, veniam consectetur excepturi!
            Rerum quod velit perferendis hic consectetur tempora assumenda et quos excepturi, at minus commodi dignissimos, reprehenderit quidem quaerat repellendus eligendi. Facere, magni a ipsa tenetur in ea distinctio quia consectetur?
            Natus minus aspernatur impedit perferendis ipsum ipsam, repellendus voluptate ex molestias quia incidunt culpa vero delectus molestiae est obcaecati sint, voluptates provident eos dignissimos itaque consequatur. Veniam omnis nisi saepe!
            Provident a tempore alias aliquam velit error repudiandae voluptatem debitis aspernatur illum corporis quo possimus nisi, voluptatum magni temporibus corrupti ullam, atque ad, dolorum reiciendis praesentium sunt! Inventore, consectetur quo.</p>
        </div>
        <div className={styles.checkout}>
          <div className={styles.subTotal}>
            <h3>Subtotal</h3>
            <h3>$59.94</h3>
          </div>
          <p>Taxes and shipping are calculated at checkout.</p>
          <div className={styles.checkoutButtons}>
            <button>Checkout</button>
            <button>View Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
