"use client";
import { Product } from "@/app/page";
import { getCart } from "@/utils/getData";
import { Table } from "antd";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./style.css";
import { ColumnsType } from "antd/es/table";

interface CartItem {
  key: number;
  product?: JSX.Element;
  price: string;
  qty: number;
  subTotal: string;
}

const ProductDetails = (props: Product) => {
  return (
    <div className="flex max-sm:flex-col">
      <Image
        className="rounded-lg object-cover"
        width={75}
        height={75}
        alt="cart-thumbnail"
        src={props.thumbnail}
      />
      <div className="sm:ml-4">
        <p className=" font-medium">{props.title}</p>
        <p className="text-[--md-gray] font-normal">{props.title}</p>
        <p className="text-[--md-gray] font-normal">Qty- {props.quantity}</p>
      </div>
    </div>
  );
};

const ProductFooter = () => {
  return (
    <div className="ml-4 flex justify-end">
      <a>Move to Wishlist</a>
      <a className="ml-11">Remove</a>
    </div>
  );
};

const CartTable = () => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    getCart()
      .then((response: any) => setCart(response.carts[0].products))
      .catch((err) => console.log(err));
  }, []);

  const sharedOnCell = (_: CartItem | JSX.Element, index: number) => {
    if (index % 2 === 1) {
      return { colSpan: 0 };
    }

    return {};
  };

  const rawDataSource: CartItem[] =
    cart && cart.length > 0
      ? cart.map((item) => {
          return {
            key: item.id,
            product: <ProductDetails {...item} />,
            price: "$" + item.price,
            qty: item.quantity,
            subTotal: "$" + item.price * item.quantity,
          };
        })
      : [];

  const dataSource: any[] = [];
  if (rawDataSource.length > 0) {
    for (const item of rawDataSource) {
      dataSource.push(item);
      dataSource.push({ product: <ProductFooter /> });
    }
  }

  const columns: any = [
    {
      title: "Product Name",
      dataIndex: "product",
      onCell: (_ = [], index = 0) => ({
        colSpan: index % 2 === 1 ? 4 : 1,
      }),
    },

    {
      title: "Price",
      dataIndex: "price",
      onCell: sharedOnCell,
    },
    {
      title: "Qty",
      dataIndex: "qty",
      onCell: sharedOnCell,
    },
    {
      title: "Subtotal",
      dataIndex: "subTotal",
      onCell: sharedOnCell,
    },
  ];



  return (
    <div className="cartTable">
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default CartTable;
