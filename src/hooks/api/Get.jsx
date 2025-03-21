import { useState, useEffect } from "react";
import axios from "../../axios";
import { processError } from "../../lib/utils";

const useStats = (url, update) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getStats = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${url}`);
      setData(data?.data);
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStats();
  }, [update]);

  return { loading, data };
};

const useUsers = (url, currentPage = 1, update) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState("");

  const getUsers = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${url}?page=${currentPage}&limit=15`);
      setData(data?.data?.data);
      setPagination(data?.data?.totalPages);
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, [currentPage, update]);

  return { loading, data, pagination };
};

const useStories = (url, currentPage = 1, update) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState("");

  const getUsers = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${url}?page=${currentPage}&limit=15`);
      setData(data?.data?.stories);
      setPagination(data?.data?.totalPages);
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, [currentPage, update]);

  return { loading, data, pagination };
};

const useStoriesDetail = (url, update) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getProfileDetail = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${url}`);
      setData(data?.data);
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfileDetail();
  }, [update]);

  return { loading, data };
};

const useUsersDetail = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({});

  const getUsers = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${url}`);
      setData(data?.data);
      setPagination(data?.pagination);
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return { loading, data, pagination };
};

const useFeedBack = (url, currentPage = 1, update) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState("");

  const getFeedBack = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${url}?page=${currentPage}&limit=15`);
      setData(data?.data);
      setPagination(data?.totalPages);
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFeedBack();
  }, [update, currentPage]);

  return { loading, data, pagination };
};

const useAllSubject = (url, update) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [subjectId, setSubjectId] = useState([]);

  const getAllSubject = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${url}`);
      setData(data?.data?.subject);
      setSubjectId(data?.data?._id);
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllSubject();
  }, [update]);

  return { loading, data, subjectId };
};

const useSubscription = (url, currentPage = 1, update) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState("");

  const getSubscription = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${url}?page=${currentPage}&limit=15`);
      setData(data?.data);
      setPagination(data?.totalPages);
    } catch (error) {
      processError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSubscription();
  }, [currentPage, update]);

  return { loading, data, pagination };
};
export {
  useStats,
  useUsers,
  useStories,
  useUsersDetail,
  useStoriesDetail,
  useFeedBack,
  useAllSubject,
  useSubscription,
};
