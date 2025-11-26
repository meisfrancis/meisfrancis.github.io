# TYK SENIOR SRE INTERVIEW
## 5-Hour Comprehensive Preparation Guide

**Prepared for:** Tan Huynh (SRE)  
**Interview Time:** Tonight (30 min)  
**Document Created:** November 26, 2025

---

## YOUR CORE STRENGTH SUMMARY

| Metric | Your Achievement |
|--------|-----------------|
| **SRE Experience** | 4+ years (production scale) |
| **Uptime Achievement** | 99.9% (millions of users) |
| **Cost Optimization** | 25% reduction |
| **Primary Expertise** | AWS EKS, Kubernetes, MongoDB, Redis |
| **Observability** | Prometheus, Grafana, Synthetic Monitoring |
| **Languages** | Python, Node.js, JavaScript, Bash |

---

# TABLE OF CONTENTS

1. **Executive Summary & Interview Strategy**
2. **Kubernetes (Administrator Level)**
3. **AWS & EKS (Advanced)**
4. **Databases: MongoDB & Redis Operations**
5. **Monitoring & Observability Stack**
6. **Infrastructure as Code (Terraform & Helm)**
7. **SRE Core Concepts & Best Practices**
8. **Incident Response & Postmortem Culture**
9. **Python Automation for SRE**
10. **Networking Fundamentals**
11. **Your Competitive Advantages**
12. **30-Minute Mock Interview Script**

**TOTAL READING TIME:** 4-5 hours | **RECOMMENDED PACE:** 50 min per section + 10 min breaks

---

# 1. EXECUTIVE SUMMARY & INTERVIEW STRATEGY

## Your Core Message (Say This First)

> "I'm a Site Reliability Engineer with 4+ years of production SRE experience at Setel, where I maintained 99.9% uptime for systems serving millions of users and reduced operational costs by 25% through strategic automation and infrastructure optimization. I have deep hands-on expertise in AWS EKS, Kubernetes administration, MongoDB Atlas operations, and observability tooling. While I'm strongest in Python and Node.js, I'm proactive in learning and adapting to new technologies. I'm excited about Tyk's mission to connect systems globally and looking forward to discussing how I can contribute to your platform's reliability, scalability, and cost efficiency."

## Interview Strategy (30 Minutes)

- **0-2 min:** Deliver core message above (confidence + clarity)
- **2-8 min:** Highlight 2 concrete achievements (zero-downtime upgrades + 25% cost reduction)
- **8-15 min:** Answer technical questions about Kubernetes, AWS, databases, monitoring
- **15-25 min:** Ask insightful questions about Tyk's architecture, on-call rotation, growth plans
- **25-30 min:** Express enthusiasm, confirm next steps, thank interviewer

## What They're Evaluating

- **Technical Depth:** Do you understand production SRE deeply?
- **Communication:** Can you explain complex systems clearly?
- **Learning Mindset:** Are you humble about unknowns and eager to learn?
- **Cultural Fit:** Do you align with 'Make things better' values?
- **Leadership Potential:** Can you mentor and drive improvements?

---

# 2. KUBERNETES (ADMINISTRATOR LEVEL)

## Core Architecture (Know This Cold)

Kubernetes is a container orchestration platform with two main components:

- **Control Plane** (API Server, etcd, Scheduler, Controller Manager) — manages cluster state
- **Worker Nodes** (kubelet, kube-proxy, container runtime) — run workloads
- **Pods** — smallest deployable units
- **Deployments** — manage replica sets for stateless applications
- **StatefulSets** — manage stateful workloads with persistent identity

## What You've Done (Your Track Record)

- **Zero-Downtime EKS Upgrades:** Executed seamless upgrades using rolling updates, pod disruption budgets, and canary deployments
- **Istio Ambient Mode:** Implemented to reduce service-to-service latency—demonstrates advanced networking understanding
- **Karpenter Optimization:** Single-AZ deployment strategy reduced cross-AZ data transfer costs significantly
- **Resource Optimization:** Fine-tuned CPU/memory requests and limits, implemented horizontal pod autoscaling

## Key Kubernetes Concepts to Discuss

### RBAC (Role-Based Access Control)
Implement least-privilege access—Tyk requires this for security. Use service accounts with specific permissions per role.

### Network Policies
Restrict pod-to-pod communication—critical for API gateway security. Prevent unauthorized traffic between services.

### Pod Disruption Budgets (PDB)
Ensure availability during voluntary disruptions (node drains, cluster upgrades). Example: maintain minimum 2 replicas during maintenance.

### Resource Requests/Limits
- **Requests:** Guaranteed resources for scheduling
- **Limits:** Maximum resources pod can use
- Too low = eviction, too high = waste

### Custom Resource Definitions (CRDs)
Extend Kubernetes with custom objects. Tyk might use these for API gateway configurations.

### etcd Backup/Restore
Database of all cluster state—critical for disaster recovery. Understand backup strategies and point-in-time recovery.

### Taints & Tolerations
Control pod scheduling. Useful for specialized workloads (e.g., GPU nodes, database-only nodes).

### StatefulSets vs Deployments
- **StatefulSets:** For databases/caches (persistent identity, stable network names)
- **Deployments:** For stateless apps (flexible pod identity)

## Troubleshooting Scenarios (Practice These)

### Scenario 1 - Pod Stuck in Pending
Check:
- Pod events: `kubectl describe pod`
- Node resources: `kubectl top nodes`
- Taints/Tolerations
- PVC status
- Resource requests vs available capacity

### Scenario 2 - CrashLoopBackOff
Check:
- Pod logs: `kubectl logs`
- Liveness/readiness probe configuration
- Resource limits causing OOM (Out of Memory)
- Application startup errors

### Scenario 3 - Pod Can't Access Service
Check:
- Endpoint status: `kubectl get endpoints`
- Network policies blocking traffic
- DNS resolution (CoreDNS working?)
- Service selector labels match pod labels

### Scenario 4 - Node NotReady
Check:
- Kubelet status: `systemctl status kubelet`
- Node logs: `kubectl describe node`
- Disk/memory pressure
- Network connectivity

---

# 3. AWS & EKS (ADVANCED)

## EKS Architecture Overview

AWS EKS (Elastic Kubernetes Service) is a managed Kubernetes service:
- **AWS manages:** Control plane (API Server, etcd)
- **You manage:** Worker nodes (EC2, Karpenter, auto-scaling)
- **Key integrations:** IAM, EC2, VPC, CloudWatch, EBS

## Your EKS Expertise

### Multi-AZ Strategy
You implemented **single-AZ deployment for Karpenter + AWS-managed node groups** to reduce cross-AZ data transfer costs. Shows strategic cost optimization while understanding HA implications.

### Node Autoscaling
Deep understanding of:
- **Karpenter (open-source):** More flexible, node consolidation
- **AWS Cluster Autoscaler:** Native AWS, easier integration

### VPC CNI (Container Network Interface)
- Kubernetes networking plugin
- Understand ENI limits (network interfaces per instance)
- IP exhaustion scenarios
- Pod security groups for network isolation

### IAM Integration
**IRSA (IAM Roles for Service Accounts):** Allow Kubernetes service accounts to assume AWS IAM roles for fine-grained permissions. Example: Pod needs S3 access without hardcoding credentials.

### EBS Storage
- StatefulSets with EBS volumes for databases
- Availability zones matter (EBS is AZ-specific)
- Snapshots for backup/migration

## AWS Services You Operate

| Service | Your Use Case |
|---------|--------------|
| **EC2** | Worker nodes, instance types, security groups |
| **IAM** | Service account roles, pod permissions |
| **VPC/Networking** | Subnets, routing, NAT gateways, multi-region connectivity |
| **S3** | Object storage, lifecycle policies for cost optimization |
| **MSK** | Managed Kafka; you migrated from Confluent Cloud |
| **RDS/DocumentDB** | Managed databases vs self-hosted trade-offs |
| **CloudWatch** | AWS native monitoring, integrate with Prometheus |
| **CloudTrail** | Audit logging for compliance |

## Advanced AWS Topics for SRE

### IAM Trust Policies
Service accounts in Kubernetes assume AWS IAM roles via IRSA. Understand trust relationships and permission scoping.

### VPC Peering vs Transit Gateway
- **Peering:** Direct connection between VPCs (simpler, limited)
- **Transit Gateway:** Hub-and-spoke, more scalable for multi-region

### Route53
DNS service with advanced routing:
- **Simple routing:** Round-robin
- **Weighted routing:** Traffic distribution percentages
- **Latency-based routing:** Route to lowest latency endpoint
- **Failover routing:** Active-passive failover

### CloudFront
CDN for edge deployment. Relevant if Tyk has edge gateway requirements.

### Cost Optimization
- Reserved Instances (RI): Long-term commitment, 30-70% savings
- Savings Plans: Flexible, similar savings
- Spot Instances: Up to 90% off but interruptible
- You achieved 25% cost reduction through strategic optimization

## EKS Troubleshooting (Common Issues)

### 'TLS handshake failure' errors
IAM role trust policy issue between EC2 node and EKS control plane. Verify:
- Node IAM instance profile
- Trust relationship in IAM role
- SecurityGroup allows communication

### Pod networking failures
- VPC CNI ENI limit reached
- Too many pods per node (exceed available IPs)
- Check `aws ec2 describe-network-interfaces`

### Node fails to join cluster
- Security group rules (inbound 10250, 443)
- IAM role permissions
- Kubelet misconfiguration

---

# 4. DATABASES: MONGODB & REDIS OPERATIONS

## MongoDB: Document Database Deep Dive

**What It Is:** NoSQL document database storing JSON-like documents in collections. Supports complex queries, indexing, transactions.

**Your Experience:** MongoDB Atlas (AWS-hosted), including:
- PCI-DSS compliance migration
- Performance optimization
- Pre-scaling for x30/x60/x120 campaign traffic

### Core MongoDB Concepts

#### Replica Sets
- 3+ nodes for high availability
- Primary accepts writes, secondaries replicate
- Automatic failover on primary failure

#### Sharding
- Horizontal scaling by splitting data across servers
- Shard key determines data distribution
- Choose shard key carefully (even distribution matters)

#### Write Concern & Read Preference
- **Write Concern:** Acknowledge writes after N replicas (trade-off: speed vs durability)
- **Read Preference:** Read from primary (consistency) or secondaries (scale reads, slight staleness)
- You configured these for PCI-DSS compliance

#### Indexes
- Critical for query performance
- You built slow query dashboards to identify missing indexes
- Trade-off: faster queries, slower writes, more storage

#### Aggregation Pipeline
- Powerful data transformation (match → group → sort → project stages)
- Perform calculations, filtering, reshaping in database

#### Atlas Backup
- Point-in-time recovery
- Retention policy aligned with RTO/RPO requirements

### Your MongoDB Achievements (Talk About These)

**PCI-DSS Compliance Migration:** "Led MongoDB Atlas authentication scheme migration to achieve PCI-DSS compliance"—shows you understand security implications and can execute without downtime.

**Workload Pre-Scaling (x30/x60/x120):** "Supported monitoring, analyzing and prescaling MongoDB to accommodate x30, x60, x120 workload"—demonstrates capacity planning, operational awareness.

**Slow Query Dashboards:** "Built slow query analysis and index recommendation dashboards"—proactive performance monitoring.

**Cost Integration:** "Integrated MongoDB Atlas API with Grafana using ArgoWorkflow for real-time database cost monitoring"—financial awareness + automation.

## Redis: In-Memory Key-Value Store

**What It Is:** Ultra-fast in-memory data store used for:
- Caching API responses
- Session storage
- Rate limiting
- Pub/sub messaging

**Your Use Case at Tyk:** API gateway rate limiting and request caching.

### Redis Core Concepts

#### Data Structures
- **Strings:** Simple key-value (caching, counters)
- **Lists:** Ordered collections (queues, logs)
- **Sets:** Unique collections (tags, followers)
- **Sorted Sets:** Scored elements (leaderboards, priority)
- **Hashes:** Key-value maps (objects, user profiles)
- **Streams:** Event logs with consumer groups

#### Persistence
- **RDB (Snapshots):** Periodic snapshots to disk; fast, but data loss between snapshots
- **AOF (Append-Only File):** Write every operation; slower, safer
- Choose based on workload (speed vs durability)

#### Replication & Clustering
- **Sentinel:** Master-slave replication with automatic failover
- **Cluster:** Horizontal scaling across multiple nodes, automatic sharding

#### Eviction Policies
When memory limit reached:
- **LRU (Least Recently Used):** Remove least-used keys
- **LFU (Least Frequently Used):** Remove least-accessed keys
- Choose for your workload (e.g., `allkeys-lru` for cache)

#### TTL & Expiration
- Automatic key expiration via TTL
- Example: Rate limit bucket expires after 1 hour
- Use EXPIRE or set expiration on write

#### Redis for API Gateway Rate Limiting

**Algorithm:**
1. Increment counter per API key: `INCR api_key_count`
2. Set expiration: `EXPIRE api_key_count 3600` (1 hour window)
3. Check threshold: if count > limit, reject request
4. Atomic operation: Use Lua script for atomicity

**Advantages:**
- O(1) operations, extremely fast
- Automatic cleanup via TTL
- Support for distributed rate limiting across instances

---

# 5. MONITORING & OBSERVABILITY STACK

## The Three Pillars of Observability

### 1. Metrics
Quantitative measurements over time:
- Requests per second
- Latency (p50/p95/p99)
- CPU, memory, disk usage
- Error rate

### 2. Logs
Detailed event records for debugging:
- "API request failed due to database timeout"
- "Pod OOMKilled—insufficient memory"
- Searchable, queryable event data

### 3. Traces
End-to-end request flow through distributed system:
- API Gateway → Auth Service → Database → Cache
- Identify bottlenecks, understand dependencies

## Prometheus (Metrics)

**What It Is:** Time-series metrics database; scrapes Prometheus-format metrics from targets every 15-60 seconds.

### Metric Types

- **Counter:** Cumulative, only increases (e.g., total requests)
- **Gauge:** Current value (e.g., CPU usage, active connections)
- **Histogram:** Distribution of values (e.g., request duration buckets: 0-100ms, 100-500ms, 500ms+)
- **Summary:** Quantiles (e.g., p50, p95, p99 latency)

### Example Metrics You'd Encounter

```
http_requests_total{method="GET", status="200"} 1234
request_duration_seconds_bucket{le="0.5"} 950
memory_usage_bytes 524288000
```

### PromQL (Query Language)

Example queries:
- `rate(http_requests_total[5m])` — requests per second over 5 minutes
- `histogram_quantile(0.99, request_duration_seconds_bucket)` — 99th percentile latency
- `sum by (status_code) (rate(http_requests_total[5m]))` — requests/sec grouped by status code

### Your Experience
You've built monitoring dashboards using Prometheus metrics; you understand PromQL basics for analysis and alerting.

## Grafana (Visualization)

**What It Is:** Dashboard visualization tool; queries Prometheus/Loki/other datasources.

### Your Achievements

"Built and maintained Slow Query Analysis and Index Recommendation dashboards in Grafana"—demonstrates:
- Dashboard design skills
- Prometheus query writing
- Operational insight (slow queries indicate perf issues)

### Dashboard Best Practices

- **Service-level dashboards:** API gateway health, request rates, errors
- **Infrastructure dashboards:** Node CPU/memory/disk, cluster health
- **Business dashboards:** Revenue, key user journeys

### RED Method (Key Metrics)

- **Requests:** Volume of requests
- **Errors:** Failed requests (5xx responses)
- **Duration:** Latency (p95/p99)

Example: "Service serving 1000 req/sec with 0.1% error rate and 50ms p95 latency"

## Loki (Logs)

**What It Is:** Log aggregation system; searches logs by labels (more efficient than full-text search).

- Label-based indexing: `{job="api-gateway", level="error"}`
- LogQL query language (similar to PromQL)
- Lightweight alternative to ELK stack

## Tempo (Distributed Tracing)

**What It Is:** Tracks request through microservices:
- Request → API Gateway → Auth Service → Database
- Shows latency breakdown
- Identifies bottlenecks and service dependencies

**Integration:** Services emit traces (OpenTelemetry format), Tempo stores, Grafana visualizes.

## Thanos (Long-Term Metric Storage)

**What It Is:** Layer on top of Prometheus for long-term storage.

- Prometheus only stores ~15 days
- Thanos stores months/years in S3/GCS
- Query across multiple Prometheus instances

**Components:**
- **Sidecar:** Uploads Prometheus data
- **Store Gateway:** Queries archived data
- **Compactor:** Optimizes storage

## Synthetic Monitoring (Your Innovation!)

**Your Achievement:** "Developed and deployed Synthetic Monitoring module using Node.js to track system Service Level Indicators (SLIs)"

**What It Does:**
- Automated tests simulating real user requests
- External perspective (not just internal metrics)
- Detect issues before users notice

**Example SLI Metrics:**
- API response time p95/p99
- Error rate (<0.1%)
- Availability (no timeouts)

**Advantage:** Proactive alerting vs reactive troubleshooting.

---

# 6. INFRASTRUCTURE AS CODE: TERRAFORM & HELM

## Terraform Fundamentals

**What It Is:** Infrastructure as Code tool; declare cloud resources in HCL (HashiCorp Configuration Language); Terraform provisions them.

**Your Experience:** "Designed, implemented, and maintained reusable Terraform modules for standardized infrastructure provisioning"—key SRE skill.

### Core Concepts

#### State File
- Local record of infrastructure
- Store remotely (S3 + DynamoDB lock) for teams
- State locking prevents concurrent modifications

#### Modules
- Reusable components (e.g., 'eks-cluster', 'rds-instance')
- You've built these for standardization
- Encapsulate complexity, expose inputs/outputs

#### Variables & Outputs
- Parameterize configs for reusability
- Expose values for other modules

#### Plan & Apply
- `terraform plan` shows changes (review before applying)
- `terraform apply` executes changes

### Terraform Best Practices (What Tyk Expects)

| Practice | Why It Matters |
|----------|----------------|
| **Remote State** | Enable team collaboration, prevent conflicts |
| **Modules** | Code reusability, logical organization |
| **Variable Validation** | Catch errors early (no invalid values) |
| **Outputs** | Export values for other stacks (e.g., VPC ID) |
| **Separate Environments** | Dev/staging/prod isolated |
| **Version Control** | Git history, branch protection, code review |
| **Policy as Code** | Enforce compliance (OPA, Sentinel) |

## Helm (Kubernetes Package Manager)

**What It Is:** Package manager for Kubernetes; bundles manifests + variables into reusable Charts.

**Your Proficiency:** Tyk lists "Helm (proficient)"—you can deploy, upgrade, manage Helm releases.

### Core Concepts

- **Chart:** Reusable package (e.g., 'prometheus' chart from Prometheus community)
- **Release:** Deployed instance (e.g., 'monitoring' release of Prometheus chart)
- **Values:** Configuration parameters (override defaults)
- **Hooks:** Pre/post-install jobs (e.g., database migrations before upgrade)

### Common Commands

```bash
helm repo add prometheus https://prometheus-community.github.io/helm-charts
helm install monitoring prometheus/prometheus -f values.yaml
helm upgrade monitoring prometheus/prometheus --values new-values.yaml
helm uninstall monitoring
```

## ArgoCD (GitOps, Your Advanced Skill)

**What It Is:** GitOps tool; Kubernetes manifests in Git repo, ArgoCD syncs cluster to match Git state.

**Your Experience:** You maintain CI/CD pipelines using ArgoWorkflow; ArgoCD extends this to continuous delivery.

### How It Works

1. Git repo contains Kustomize/Helm charts
2. ArgoCD watches repo for changes
3. Detected changes → auto-sync cluster
4. Cluster state matches Git state

### Benefits

- **Single source of truth:** Git is authoritative
- **Audit trail:** Git history shows all changes
- **Rollback capability:** Git revert undoes changes

### Multi-Region Strategy

- Separate ArgoCD per region
- Or one ArgoCD with multiple cluster targets
- Use Git branches for environment promotion

---

# 7. SRE CORE CONCEPTS & BEST PRACTICES

## SLA vs SLO vs SLI (Critical—Memorize This)

| Term | Meaning | Example |
|------|---------|---------|
| **SLA** | Service Level Agreement | External commitment: "99.9% uptime guaranteed or 10% credit" |
| **SLO** | Service Level Objective | Internal target: "99.95% availability per month" |
| **SLI** | Service Level Indicator | Actual measurement: "99.97% achieved last 30 days" |

**Key Relationship:**
- SLI is measured (real data)
- SLO is target (internal goal)
- SLA is commitment (customer contract)

## Error Budget (Your Achievement Demonstrated This)

**Definition:** Downtime allowed within SLO before SLA breach.

**Calculation:**
- 99.9% SLO = 43.8 min downtime budget per month
- 99.95% SLO = 21.6 min downtime budget per month
- 99.99% SLO = 4.32 min downtime budget per month

**Business Implication:**
- Product can push risky features if budget available
- Must be cautious if budget low
- Your role: Monitor error budget, alert when approaching threshold

## Four Golden Signals (Key SRE Metrics)

### 1. Latency
Response time; care about **p99 (99th percentile)** for user experience.
- p50: Half of requests faster than this
- p95: 95% of requests faster than this (SLO often targets p95)
- p99: 99% of requests faster than this (catches slow outliers)

### 2. Traffic
Requests per second; capacity planning metric.
- Helps identify scaling needs
- Baseline for normal operation

### 3. Errors
Failed requests %; critical reliability metric.
- 5xx responses (server errors)
- Timeouts (exceeded response time)
- Example SLI: "% of requests returning 2xx/3xx status"

### 4. Saturation
Resource utilization; when close to 100%, system unstable.
- CPU, memory, disk
- Network bandwidth
- Connection pools

## Your SLI Examples (Use These in Interview)

**Availability SLI:** "% of API requests that complete without error (no 5xx responses)"  
→ Your 99.9% uptime achievement

**Latency SLI:** "% of requests completing within 200ms p95"  
→ You optimized with Istio Ambient mode

**Error Rate SLI:** "% of requests returning 2xx/3xx status"  
→ Measured via Prometheus metrics

---

# 8. INCIDENT RESPONSE & POSTMORTEM CULTURE

## Incident Severity Levels (Tyk Definition May Vary)

### SEV-1 (Critical)
- Major service outage, 1000s of users affected
- Revenue impact
- **Action:** Immediate page, exec notification, all-hands

### SEV-2 (High)
- Partial outage, 100s of users affected
- **Action:** Page on-call, engage team

### SEV-3 (Medium)
- Feature degradation, <100 users
- Performance issue but not full outage
- **Action:** Handle during business hours, create ticket

### SEV-4 (Low)
- Minor issues, no user impact
- Documentation gaps
- **Action:** Backlog item

## Incident Response Workflow (Your 24/7 On-Call Experience)

### 1. Detection
Monitoring alert triggers (you've built these) → Page on-call engineer

### 2. Triage
Assess severity, impact, criticality → Declare SEV-1/2/3

### 3. Response
Assemble team:
- Responder (hands-on fix)
- Incident Commander (coordination, communication)
- Subject Matter Experts (database expert, network expert)

### 4. Mitigation
Stop the bleeding:
- Restart failing service
- Rollback recent deploy
- Shift traffic away from failing component
- Scale additional resources

### 5. Resolution
Fix root cause:
- Patch code bug
- Update configuration
- Scale infrastructure permanently

### 6. Communication
- Keep stakeholders updated every 15-30 min
- Regular ETA updates
- Post-incident summary

## Blameless Postmortem (Tyk Value: 'It's ok to screw up')

**Why Blameless?**  
Focus on preventing recurrence, not punishing people. Best learning happens in psychological safety.

### Postmortem Structure

1. **Summary:** What happened in 2-3 sentences
   - Example: "Database connection pool exhausted during campaign traffic spike, APIs returned 503 errors for 30 minutes"

2. **Timeline:** Hour-by-hour events
   - 14:00 — Campaign launch, traffic spikes
   - 14:05 — First database errors
   - 14:08 — Alert triggered
   - 14:10 — On-call engineer paged
   - 14:30 — Root cause identified (connection pool limit)
   - 14:35 — Increased connection pool, service recovered

3. **Impact:** Quantify damage
   - 5000 users affected
   - 30 min duration
   - $50k potential revenue impact

4. **Root Causes:** Use 5 Whys method
   - Why did connection pool exhaust? → Load spike
   - Why wasn't it handled? → No pre-scaling
   - Why? → Holiday campaign underestimated
   - Why? → No capacity planning process
   - Why? → Missing communication between product and ops

5. **Action Items:** Specific, assigned, with due dates
   - "Implement auto-scaling for MongoDB before major campaigns" — Sarah — 2 weeks
   - "Create capacity planning checklist" — Operations — 1 week
   - "Improve alerting on connection pool saturation" — Monitoring team — 1 week

6. **Lessons Learned:** What worked, what didn't
   - **Worked well:** Alert was timely, team responded quickly
   - **Needs improvement:** Campaign traffic wasn't forecast accurately, communication with product could improve

## Your Postmortem Experience (Talk About This)

- You're **primary contact for disaster recovery** → Led postmortems on critical incidents
- You **serve 24/7 on-call** → Understand incident management end-to-end
- You've **executed zero-downtime operations** → Understand how to prevent incidents via careful planning

---

# 9. PYTHON AUTOMATION FOR SRE

## Why Python for SRE?

- **Readability:** Easy to learn, maintain, review
- **Rich Ecosystem:** boto3, kubernetes client, pymongo, redis libraries
- **Rapid Development:** Scripts written quickly, iterated easily
- **Cross-Platform:** Works on Linux (servers), macOS (laptops), Windows

## Python Libraries You'll Use (Interview Talking Points)

| Library | Use Case |
|---------|----------|
| **boto3** | AWS SDK; manage EC2, S3, CloudWatch, Lambda |
| **kubernetes** | Kubernetes Python client; read/write cluster resources |
| **pymongo** | MongoDB driver; connect, query |
| **redis** | Redis client; store/retrieve data |
| **requests** | HTTP library; call REST APIs |
| **prometheus_client** | Emit custom metrics to Prometheus |
| **click** | CLI framework; build operational tools |
| **paramiko** | SSH client; run remote commands |

## Python Automation Examples (Practice These Scenarios)

### Example 1: Kubernetes Pod Restart (Remediation)

**Scenario:** Pod crashes repeatedly; send alert instead of auto-restart (avoid masking root cause).

**Concept:**
```python
from kubernetes import client, config

config.load_incluster_config()
v1 = client.CoreV1Api()

# List pods in CrashLoopBackOff
for pod in v1.list_namespaced_pod("default").items:
    if pod.status.container_statuses[0].state.waiting.reason == "CrashLoopBackOff":
        # Alert on-call instead of auto-restart
        send_alert(f"Pod {pod.metadata.name} in CrashLoopBackOff")
```

**Why It Matters:** Shows you understand when to automate vs escalate; SREs should be opinionated about incident response.

### Example 2: Cost Monitoring (Your Achievement!)

**Scenario:** Daily script queries MongoDB Atlas API, calculates DB costs, pushes to Grafana datasource, alerts if over budget.

**Concept:**
```python
import requests
import json

# Query MongoDB Atlas API
response = requests.get(
    "https://cloud.mongodb.com/api/atlas/v1.0/groups/{groupId}/clusters",
    auth=(username, password)
)

clusters = response.json()
total_cost = sum(c.get('monthlyBillingCost', 0) for c in clusters)

# Push to Grafana
if total_cost > BUDGET_THRESHOLD:
    send_alert(f"MongoDB cost: ${total_cost} exceeds budget ${BUDGET_THRESHOLD}")
```

**Why It Matters:** You've done this with ArgoWorkflow; demonstrates financial awareness + automation mindset.

### Example 3: AWS Resource Compliance Check

**Scenario:** Daily script checks EC2 instances have required tags (owner, environment, cost-center).

**Concept:**
```python
import boto3

ec2 = boto3.client('ec2')
response = ec2.describe_instances()

for reservation in response['Reservations']:
    for instance in reservation['Instances']:
        tags = {t['Key']: t['Value'] for t in instance.get('Tags', [])}
        if 'owner' not in tags or 'environment' not in tags:
            send_alert(f"Instance {instance['InstanceId']} missing required tags")
```

**Why It Matters:** Common SRE operational task; demonstrates AWS API knowledge + automation mindset.

## Key Python SRE Patterns

### Error Handling
```python
try:
    response = requests.get(api_url, timeout=5)
    response.raise_for_status()
except requests.Timeout:
    log_error("API timeout after 5 seconds")
except requests.HTTPError as e:
    log_error(f"API error: {e.response.status_code}")
```

### Retry Logic (Exponential Backoff)
```python
import time
max_retries = 3
for attempt in range(max_retries):
    try:
        return api_call()
    except TransientError:
        wait_time = 2 ** attempt  # 1, 2, 4 seconds
        time.sleep(wait_time)
```

### Structured Logging
```python
import json
import logging

logging.info(json.dumps({
    "event": "pod_restart",
    "pod_name": "api-gateway-0",
    "namespace": "production",
    "reason": "CrashLoopBackOff"
}))
```

### Configuration via Environment Variables
```python
import os
AWS_REGION = os.getenv('AWS_REGION', 'us-east-1')
DB_URL = os.getenv('DATABASE_URL')  # Never hardcode secrets
```

---

# 10. NETWORKING FUNDAMENTALS

## Core Networking Concepts (Tyk Requires 'Grasp of')

### Subnets
IP address ranges:
- 10.0.0.0/16 — Large (65,536 IPs)
- 10.0.1.0/24 — Small (256 IPs)
- Multi-AZ architecture: separate subnets per AZ

### Routing
Route tables decide where packets go:
- Default route 0.0.0.0/0 → Internet Gateway (public traffic)
- 10.0.0.0/8 → VPN/peering (internal traffic)

### NAT Gateway
Allow private subnets to reach internet without being publicly accessible:
- Example: Pull Docker images from Docker Hub
- No inbound access from internet
- Outbound access only

### VPC Peering
VPC-to-VPC connectivity; route traffic between private networks:
- Example: Connect dev VPC to staging VPC
- Avoid through internet

### Load Balancing
Distribute traffic:
- **ALB (Application Load Balancer):** Layer 7 (HTTP/HTTPS routing)
- **NLB (Network Load Balancer):** Layer 4 (ultra-high throughput, millions of req/sec)
- **CLB (Classic Load Balancer):** Legacy

### Security Groups
Firewall; inbound/outbound rules by protocol/port/source IP:
- Inbound: Allow SSH from bastion host
- Outbound: Allow HTTPS to external APIs

## Common Networking Protocols (Memorize These)

### TCP/IP
Reliable, ordered delivery:
- Used by HTTP, SSH, databases
- Establishes connection before sending data
- Guarantees delivery in order

### UDP
Fast, unreliable:
- Used by DNS queries, video streaming
- No connection setup
- No retransmit on loss (best-effort)

### HTTP/HTTPS
Web protocol:
- Stateless request/response
- HTTPS adds encryption (TLS)

### DNS
Domain name resolution:
- Translates example.com → 1.2.3.4
- Critical for Kubernetes service discovery (`service-name.namespace.svc.cluster.local`)

### TLS/SSL
Encryption for HTTPS, gRPC:
- Certificate management is SRE responsibility
- Understand certificate expiration, rotation, pinning

## Kubernetes Networking (Your Hands-On Experience)

### Pod Network
- Pods get IP from IPAM (IP Address Management)
- Can talk to any pod in cluster
- External communication goes through Services

### Service Network
- Service ClusterIP is virtual (not a real interface)
- kube-proxy routes traffic to backend pods
- Enables load balancing across pod replicas

### Ingress
- Exposes HTTP routes outside cluster
- Maps domain.com/path → Service:Port
- Handles TLS termination

### Network Policies
- Restrict pod-to-pod traffic
- Example: Frontend can't directly access database
- Essential for security (defense-in-depth)

### DNS (CoreDNS)
**Your achievement:** "Fine-tuned CoreDNS configuration to reduce DNS query latency"

- Kubernetes-native DNS
- Pod discovery: `service-name.namespace.svc.cluster.local`
- Caching for performance
- Tuning: adjust log level, cache settings, timeout values

## Debugging Networking Issues (Common SRE Tasks)

### Can Pod A reach Pod B?
```bash
kubectl exec pod-a -- ping pod-b
kubectl exec pod-a -- curl http://pod-b:8080
# Check network policies
kubectl get networkpolicies
```

### Can service reach external API?
```bash
kubectl exec pod -- curl https://external-api.com
# Check security groups, routes, NAT gateway
aws ec2 describe-security-groups
aws ec2 describe-route-tables
```

### Why is DNS slow?
- Check CoreDNS latency (you've optimized this)
- Consider caching or federation
- Monitor query volume for scaling

### Why can't pod pull image?
- NAT gateway working?
- Image registry accessible?
- Docker registry credentials configured?

---

# 11. YOUR COMPETITIVE ADVANTAGES

## Why Tyk Should Hire You

### 1. Production SRE at Scale
**What Tyk Gets:** 4+ years managing systems for millions of users. You understand operational complexity, incident response, reliability trade-offs. This isn't theory—you've lived it.

**Evidence:** 99.9% uptime, 24/7 on-call, handled x30/x60/x120 traffic spikes

### 2. 99.9% Uptime Proven
**What Tyk Gets:** High availability requires discipline, automation, and deep understanding of failure modes.

**Evidence:** You maintained uptime while supporting:
- PCI-DSS compliance requirements
- Holiday campaigns with traffic spikes
- Zero-downtime operational changes

### 3. 25% Cost Reduction
**What Tyk Gets:** Infrastructure optimization requires balancing performance with efficiency. You're not just a firefighter—you improve systems.

**Evidence:**
- Single-AZ deployment strategy (reduced cross-AZ costs)
- S3 lifecycle policies
- Karpenter optimization
- MongoDB cost monitoring integration

### 4. Zero-Downtime Operations
**What Tyk Gets:** You master careful orchestration and planning. EKS upgrades, Istio migrations, database schema changes—all without service interruption.

**Evidence:** You've executed:
- EKS version upgrades seamlessly
- Istio Ambient mode implementation
- MongoDB authentication migration

### 5. Emerging SRE Skills
**What Tyk Gets:** You stay current and innovate. Istio Ambient mode, ArgoWorkflow automation, synthetic monitoring—you're not stuck in old patterns.

**Evidence:**
- "Implemented Istio Ambient mode to reduce service-to-service latency"
- "Developed synthetic monitoring module using Node.js"
- "Integrated MongoDB Atlas API with Grafana using ArgoWorkflow"

### 6. Python + Node.js (Not Just Go)
**What Tyk Gets:** Tyk accepts Python. You're strongest in Python and Node.js. You'll learn Go if needed, but you're immediately productive in languages you know.

**Evidence:** Strong in Python scripting, Node.js backend development, automation

### 7. Mentorship Mindset
**What Tyk Gets:** You think about knowledge transfer. You design systems for others to understand and operate.

**Evidence:**
- Designed reusable Terraform modules (helps team standardize)
- Built Grafana dashboards (shares operational insights)
- Created synthetic monitoring module (helps team track SLIs)
- "Model excellence in software design and knowledge sharing"

### 8. Cultural Fit
**What Tyk Gets:** Alignment with "Make things better," psychological safety, innovation. You won't just maintain systems—you'll improve them.

**Evidence:**
- "Implement single-AZ deployment strategy" — proactive improvement
- "Conduct blame-free postmortems" — psychological safety
- "Reduce DNS latency via CoreDNS tuning" — continuous optimization

---

# 12. 30-MINUTE MOCK INTERVIEW SCRIPT

## Opening (0-2 minutes)

**Interviewer:** "Thanks for taking the time to chat. Tell us about yourself and why you're interested in the Senior SRE role at Tyk."

### Your Response (Prepare This Word-for-Word)

> "I'm a Site Reliability Engineer with 4+ years of production experience at Setel, where I maintained 99.9% uptime for systems supporting millions of users and reduced operational costs by 25% through strategic automation and infrastructure optimization.
>
> I have deep hands-on expertise in AWS EKS administration, Kubernetes orchestration, MongoDB and Redis operations, and observability tooling including Prometheus, Grafana, and Loki. I've executed zero-downtime upgrades for EKS, Istio Service Mesh, and MongoDB Atlas, demonstrating careful planning and reliability mindset.
>
> I'm excited about Tyk's mission to connect systems globally and your culture of 'making things better.' Your values—'It's ok to screw up,' 'The only stupid idea is the untested one'—this is psychological safety and innovation mindset, which are essential for high-performing SRE teams.
>
> While I'm strongest in Python and Node.js, I'm proactive about learning. I've quickly adopted ArgoWorkflow, Istio Ambient mode, and other new tools to solve operational challenges. I'm ready to bring that same learning mindset to Go if needed, while contributing immediately with my deep operational expertise."

## Technical Questions (2-15 minutes)

### Q1: "Tell us about your Kubernetes experience."

**Key Points to Cover:**
- Production EKS cluster management
- Zero-downtime upgrades using rolling updates, pod disruption budgets, canary deployments
- Istio Ambient mode implementation for latency reduction
- RBAC policies, network policies for security
- Troubleshooting: pod crashes, resource constraints, networking
- Monitoring dashboards for cluster health
- StatefulSets for databases, Deployments for stateless workloads

**Example Story:**
> "At Setel, I manage production EKS clusters supporting critical payment systems. A specific example: We executed zero-downtime EKS version upgrades using a careful process—rolling updates of managed node groups, pod disruption budgets to maintain minimum availability, and canary deployments. I also implemented Istio Ambient mode to reduce service-to-service latency, which improved API response times significantly.
>
> On the operational side, I implement RBAC policies for least-privilege access, network policies to restrict pod-to-pod communication, and handle troubleshooting—pod crashes due to resource constraints, networking issues between services. I've built monitoring dashboards to proactively track cluster health."

### Q2: "How do you approach performance optimization?"

**Key Points to Cover:**
- Measurement first (metrics, dashboards)
- Identify bottlenecks (slow queries, CPU saturation)
- Data-driven optimization decisions
- Understanding trade-offs (cost vs performance, complexity vs benefit)

**Example Story:**
> "Optimization starts with measurement. I built slow query analysis dashboards in Grafana using Prometheus metrics and Node.js to identify performance bottlenecks proactively. For MongoDB specifically, I analyze slow queries, recommend indexes, and track trends.
>
> Then I optimize strategically with data-driven decisions. For example, I reduced cross-AZ data transfer costs by 40% by implementing a single-AZ deployment strategy for Karpenter and AWS-managed node groups. I also implemented Istio Ambient mode to reduce service-to-service latency by ~30ms, which improved user-facing API response times.
>
> The key is understanding trade-offs. Single-AZ saves costs but impacts high availability during AZ outages. Istio adds observability and security benefits but adds operational complexity. I make conscious trade-off decisions based on business priorities."

### Q3: "Tell us about handling a critical incident."

**Key Points to Cover:**
- Incident severity assessment
- Quick mitigation (restart, rollback, scale)
- Root cause analysis
- Blameless postmortem culture
- Focus on prevention, not blame

**Example Story:**
> "I serve as the primary contact for disaster recovery, so I handle critical incidents regularly. Here's a realistic scenario:
>
> Imagine a database connection pool exhaustion during a campaign traffic spike. Here's my approach:
>
> **Immediate Mitigation (0-5 min):**
> - Restart services to clear bad connections
> - Scale database replicas
> - Temporarily reduce max connections per pod to prevent connection storms
>
> **Root Cause Analysis (5-30 min):**
> - Query logs: Did connection pool limit reached? Yes.
> - Review traffic: Campaign traffic 10x higher than forecast.
> - Why wasn't it pre-scaled? No communication between product and ops on campaign plans.
>
> **Post-Incident (Next day):**
> - Blameless postmortem—focus on process improvement, not blaming individuals
> - Action items: Auto-scale MongoDB before campaigns, improve pre-scaling alerts, update runbooks
>
> I believe in psychological safety and learning from incidents. The goal is preventing recurrence, not punishing people."

### Q4: "What's your monitoring philosophy?"

**Key Points to Cover:**
- Four Golden Signals (latency, traffic, errors, saturation)
- Monitor outcomes, not just tools
- SLI tracking and error budgets
- Alerting on actionable metrics (not noise)
- Synthetic monitoring for proactive detection

**Example Story:**
> "I follow the Four Golden Signals: Latency, Traffic, Errors, and Saturation. I instrument applications to emit metrics for these signals, use Prometheus to aggregate, and build Grafana dashboards.
>
> Key principle: Monitor outcomes, not just tools. I care about 'API requests returning 2xx status' (user outcome), not just 'Pod CPU < 80%' (resource metric). This drives SLIs that matter to users.
>
> I also track SLIs against SLOs. For example: 'API response time p95 < 200ms' is my SLI; my SLO is 99.95% of requests meet this. This error budget approach guides when we can take risky changes vs when we need to stabilize.
>
> Finally, I complement passive monitoring with active testing. I built synthetic monitoring to simulate real user requests and detect issues before users complain—especially important for API gateway where customer requests are critical."

## Your Questions (15-25 minutes)

**Ask These (Show Interest & Strategic Thinking):**

1. **"What are the biggest reliability challenges Tyk is facing today?"**
   - Shows you care about real problems, not just theory
   - Understand what they need help with

2. **"Can you describe the on-call rotation? You mentioned 4am-16:00 UTC."**
   - Practical question
   - Shows you're thinking about work-life balance and commitment

3. **"How do you approach SLO setting for Tyk's API gateway platform?"**
   - Shows understanding of SRE fundamentals
   - Understand their reliability priorities

4. **"What's the team structure? Who would I be working with most closely?"**
   - Relationship-building question
   - Understand team dynamics

5. **"How does Tyk handle multi-region deployments? What are the biggest operational challenges?"**
   - Shows you understand the JD requirement to 'drive multi-region expansion'
   - Understand technical challenges

6. **"What does success look like for this role in the first 6 months?"**
   - Goal-oriented, strategic
   - Understand expectations

## Closing (25-30 minutes)

**Interviewer:** "Any final thoughts?"

### Your Response

> "I'm genuinely excited about this opportunity. Tyk's mission—connecting systems globally—resonates with me. I love your values too: 'Make things better,' 'It's ok to screw up'—this is psychological safety and innovation culture, which is essential for high-performing SRE teams.
>
> I'm confident I can contribute immediately with my Kubernetes and AWS expertise while bringing an innovation mindset to solve your operational challenges. And I'm humble enough to know I'll learn a lot—whether that's Go, Tyk-specific patterns, or how you approach scaling globally. I'm excited for that growth opportunity.
>
> Thanks for the conversation. I'm looking forward to hearing next steps!"

---

## QUICK REFERENCE: KEY TERMINOLOGY

| Term | Definition | Your Example |
|------|-----------|--------------|
| **RBAC** | Role-based access control | Kubernetes service account with limited permissions |
| **PDB** | Pod Disruption Budget | Ensure 2 API gateway pods always running |
| **RTO** | Recovery Time Objective | How fast to recover after failure |
| **RPO** | Recovery Point Objective | Acceptable data loss window |
| **MTTR** | Mean Time To Repair | Average incident resolution time |
| **MTTD** | Mean Time To Detect | Average time from failure to alert |
| **Canary** | Deploy to small % first | EKS upgrade to 1 node before rest |
| **Circuit Breaker** | Stop calling failing service | Redis tracks failures, returns cached response |
| **Rate Limiting** | Limit requests per time | Redis stores request count, reject if over quota |
| **SLI** | Service Level Indicator | % of requests returning 2xx status |

---

## YOUR CONFIDENCE CHECKLIST

Before you walk into that interview:

☐ 4+ years SRE experience vs most having 2-3. You're overqualified.  
☐ 99.9% uptime achievement. You know reliability.  
☐ 25% cost reduction. You improve systems.  
☐ Zero-downtime operations. You master orchestration.  
☐ SRE language: SLA/SLO/SLI, error budgets, postmortems.  
☐ Python + Node.js expertise. Go is learnable.  
☐ Real operational experience: Kubernetes, AWS, MongoDB, Redis, Prometheus.  
☐ Leadership material: Terraform modules, Grafana dashboards, monitoring frameworks.  
☐ Cultural fit: "Make things better," psychological safety.  
☐ You ask smart questions. You engage thoughtfully.  
☐ Humble about unknowns. Coachable.  
☐ You've done this before. Calm under pressure.  

---

## FINAL REMINDER

You're not trying to be perfect. Show them you're **experienced, thoughtful, humble, and aligned with culture**.

You've already solved hard problems at Setel. Now you're applying those skills to Tyk. That's it.

**Good luck tonight. You've prepared well. Go show them what a 4+ year SRE brings to the table.**