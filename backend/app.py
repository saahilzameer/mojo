import streamlit as st
import requests
from PyPDF2 import PdfReader
from newspaper import Article

GROQ_API_KEY = st.secrets["GROQ_API_KEY"]

def extract_text_from_pdf(uploaded_file):
    pdf = PdfReader(uploaded_file)
    return "\n".join(page.extract_text() or "" for page in pdf.pages)

def extract_text_from_url(url):
    try:
        article = Article(url)
        article.download()
        article.parse()
        return article.text
    except Exception as e:
        return f"Failed to fetch article: {e}"

def get_llama_analysis(resume_text, jd_text):
    prompt = f"""
Compare the following resume with the job description and return:
1. Match percentage
2. Matched keywords
3. Missing keywords
4. Suggestions

Job Description:
{jd_text}

Resume:
{resume_text}
"""
    response = requests.post(
        "https://api.groq.com/openai/v1/chat/completions",
        headers={
            "Authorization": f"Bearer {GROQ_API_KEY}",
            "Content-Type": "application/json"
        },
        json={
            "model": "llama3-8b-8192",
            "messages": [{"role": "user", "content": prompt}],
            "temperature": 0.4
        }
    )
    return response.json()["choices"][0]["message"]["content"]

# Streamlit UI
st.set_page_config(page_title="ATS Resume Matcher", page_icon="📄")
st.title(" ATS Resume Matcher ")

jd_url = st.text_input("🔗 Paste Job Description URL")
resume_file = st.file_uploader("📄 Upload your Resume (PDF)", type=["pdf"])

if st.button("Analyze Resume"):
    if not jd_url or not resume_file:
        st.warning("Please provide both the JD URL and your Resume.")
    else:
        with st.spinner("Fetching job description..."):
            jd_text = extract_text_from_url(jd_url)
        if "Failed to fetch" in jd_text:
            st.error(jd_text)
        else:
            with st.spinner("Analyzing resume with LLaMA 3..."):
                resume_text = extract_text_from_pdf(resume_file)
                result = get_llama_analysis(resume_text, jd_text)
            st.success("✅ Done!")
            st.markdown("### 📋 ATS Match Report")
            st.markdown(result)
