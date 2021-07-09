﻿using Streamish.Models;
using System;
using System.Collections.Generic;

namespace Streamish.Repositories
{
    public interface IVideoRepository
    {
        void Add(Video video);
        void Delete(int id);
        List<Video> GetAll();
        Video GetById(int id);
        void Update(Video video);
        List<Video> GetAllWithComments();
        Video GetWithCommentsById(int id);
        List<Video> Search(string criterion, bool sortDescending);
        List<Video> Hottest(DateTime criterion, bool sortDescending);
    }
}