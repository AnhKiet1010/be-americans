'use client';

import { Blog } from 'contentlayer/generated';
import Link from 'next/link';
import React, {
  useEffect,
  useState,
} from 'react';
import Tag from '@/components/tag';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Timer } from 'lucide-react';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import {
  Autoplay,
  Pagination as SwiperPagination,
} from 'swiper/modules';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import DynamicPagination from '@/components/dynamic-pagination';

export default function ListPostLayout({
  blogs,
  name,
}: {
  blogs: Blog[];
  name: string;
}) {
  const newBlogs = blogs.slice(1, 4);
  const [page, setPage] = useState(1);
  const [data, setData] = useState<Blog[]>([]);
  const resultsPerPage = 1;
  const totalResults = blogs.length;

  function onPageChange(p: number) {
    setPage(p);
  }

  useEffect(() => {
    setData(
      blogs.slice(
        (page - 1) * resultsPerPage,
        page * resultsPerPage
      )
    );
  }, [page]);

  return (
    <div className="container mx-auto py-10">
      <div className="">
        <div className="flex gap-6">
          <Swiper
            autoplay={{
              delay: 10000,
            }}
            loop={true}
            slidesPerView={1}
            spaceBetween={20}
            centeredSlides={true}
            modules={[Autoplay, SwiperPagination]}
            pagination={true}
            className="w-2/3"
          >
            {newBlogs.map((item) => (
              <SwiperSlide
                key={item.title}
                className=""
              >
                <div className="relative rounded-md overflow-hidden">
                  <Image
                    src={item.image}
                    width={500}
                    height={500}
                    className="w-full h-auto"
                    alt={item.slug}
                  />
                  <div className="flex flex-col gap-2 mt-2">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Timer size={16} />{' '}
                      {item.date}
                    </div>
                    <Link
                      href="/"
                      className="text-2xl font-medium hover:underline"
                    >
                      {item.title}
                    </Link>
                    <p className="text-gray-700">
                      {item.summary}
                    </p>
                  </div>
                  <Button
                    variant="destructive"
                    className="absolute top-2 left-2"
                  >
                    Mới
                  </Button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex-1 hidden lg:block">
            <div className="w-full flex flex-col gap-4">
              {newBlogs.map((blog) => (
                <div key={blog.slug}>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Timer size={16} />{' '}
                    {blog.date}
                  </div>
                  <Link
                    href="/"
                    className="text-lg font-medium hover:underline"
                  >
                    {blog.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-5xl font-semibold">
          Blogs
        </h1>
      </div>
      <div className="w-full mt-4">
        <div className="w-full">
          {data.map((blog) => (
            <div key={blog.slug} className="">
              <article className="w-full flex flex-col mb-4 border-b lg:flex-row items-start gap-6">
                <div className="lg:w-1/3 hidden lg:block">
                  <Image
                    alt={blog.title}
                    sizes="100vw"
                    width={350}
                    height={500}
                    src={blog.image}
                    className="w-auto h-48 object-cover inset-0 text-transparent"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 space-y-3 md:col-span-2">
                  <div className="">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Timer size={16} />{' '}
                      {blog.date}
                    </div>
                    <h3 className="mb-2 text-2xl">
                      <Link
                        className="hover:underline text-semibold"
                        href={`/blog/${blog.slug}`}
                        legacyBehavior
                      >
                        {blog.title}
                      </Link>
                    </h3>
                    <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                      {blog.summary}...
                    </div>
                    <div className="flex flex-wrap gap-3 mt-2 text-sm">
                      {blog.tags?.map((tag) => (
                        <Tag
                          key={tag}
                          text={tag}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
        <div>
          <DynamicPagination
            page={page}
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </div>
  );
}
